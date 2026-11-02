import { navbar } from "./componentes/navbar.js";
import { view } from "./componentes/view.js";
import { footer } from "./componentes/footer.js";

function router() {
  const hash = window.location.hash.slice(1) || "home";

  if (hash === "home" || hash === "") {
    navbar("home");
    view("home");
    footer("home");
  } else if (hash === "main") {
    navbar("main");
  } else if (hash === "cursos") {
    navbar("cursos");
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
