import { navbar } from "./componentes/navbar.js";
import { view } from "./componentes/view.js";
import { footer } from "./componentes/footer.js";
import { isLoggedIn } from "../services/login.service.js";
import { navigateTo } from "./componentes/navigator.js";

function router() {

  const hash = window.location.hash?.split("#")[1];

  // Rutas publicas
  const publicRoutes = [undefined, "", "home", "login", "registro"];

  if (!publicRoutes.includes(hash) && !isLoggedIn()) {
    navigateTo("login");
    return;
  }

  if (hash === "home" || !hash) {
    if (isLoggedIn()) {
      navigateTo("dashboard");
      return;
    }
    navbar("home");
    view("home");
    footer("home");
  } else if (hash === "login") {
    if (isLoggedIn()) {
      navigateTo("dashboard");
      return;
    }
    navbar("login");
    view("login");
  } else if (hash === "dashboard") {
    navbar("dashboard");
    view("dashboard");
  } else if (hash === "cursos") {
    navbar("cursos");
  } else if (hash === "perfil") {
    navbar("perfil");
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
