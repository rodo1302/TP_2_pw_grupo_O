import { navbar } from "./componentes/navbar.js";
import { view } from "./componentes/view.js";
import { footer } from "./componentes/footer.js";
import { isLoggedIn } from "../services/login.service.js";

function router() {
  const hash = window.location.hash.slice(1) || "home";

  // Rutas publicas
  const publicRoutes = ["home", "", "login", "registro"];

  if (!publicRoutes.includes(hash) && !isLoggedIn()) {
    window.location.hash = "login";
    return;
  }

  if (hash === "home" || hash === "") {
    navbar("home");
    view("home");
    footer("home");
  } else if (hash === "login") {
    navbar("login");
  } else if (hash === "dashboard") {
    navbar("dashboard");
  } else if (hash === "cursos") {
    navbar("cursos");
  } else if (hash === "perfil") {
    navbar("perfil");
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
