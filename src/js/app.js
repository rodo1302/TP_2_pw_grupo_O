import { navbar } from "./componentes/navbar.js";
import { view } from "./componentes/view.js";
import { footer } from "./componentes/footer.js";
import {
  obtenerUsuarioActual,
  haySesionIniciada,
  cerrarSesion,
} from "../services/login.service.js";
import { inicializarAlmacenamiento } from "../services/storage.service.js";

inicializarAlmacenamiento();

function router() {
  const [hashPath = "", query = ""] = window.location.hash
    .slice(1)
    .split("?", 2);
  const route = !hashPath || hashPath === "testimonios" ? "home" : hashPath;
  const publicRoutes = ["home", "login", "registrar", "recuperar"];
  const protectedRoutes = [
    "dashboard",
    "cursos",
    "unidades",
    "leccion-interactiva",
    "perfil",
    "clasificacion",
    "contacto",
    "mensaje",
  ];

  //Comprueba que si hay una sesion iniciada y
  // el usuario intenta ir a #login o #home

  if (haySesionIniciada() && (route === "login" || route === "home")) {
    const cerrar = window.confirm(
      "Ya hay una sesión iniciada. ¿Desea cerrar la sesión?",
    );
    if (cerrar) {
      cerrarSesion();
      return;
    } else {
      window.location.hash = "#dashboard";
      return;
    }
  }

  if (!publicRoutes.includes(route) && !protectedRoutes.includes(route)) {
    console.warn(`La ruta "${hashPath}" no existe; se abrirá Inicio.`);
    window.location.hash = "#home";
    return;
  }

  if (protectedRoutes.includes(route) && !haySesionIniciada()) {
    window.location.hash = "#login";
    return;
  }

  const params = new URLSearchParams(query);
  if (
    route === "leccion-interactiva" &&
    Number(obtenerUsuarioActual()?.vidas ?? 3) <= 0
  ) {
    // 🛠️ CORRECCIÓN: Impide abrir una lección por URL directa cuando la cuenta se quedó sin vidas.
    const curso = params.get("curso") || "ingles";
    window.location.hash = `#unidades?curso=${encodeURIComponent(curso)}`;
    return;
  }

  navbar(route);
  view(route, params);
  footer(route);

  if (hashPath === "testimonios") {
    requestAnimationFrame(() => {
      const testimonials = document.getElementById("testimonios");
      if (testimonials) {
        testimonials.scrollIntoView();
      }
    });
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
