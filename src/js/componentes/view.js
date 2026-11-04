import { viewHome } from "../views/home.view.js";
import { viewLogin } from "../views/login.view.js";
import { viewRegistrar } from "../views/registrar.view.js";
import { viewRecuperar } from "../views/recuperar.view.js";
import { viewPerfil } from "../views/perfil.view.js";
import { viewClasificacion } from "../views/clasificacion.view.js";
import { viewDashboard } from "../views/dashboard.view.js";
import { viewLecciones } from "../views/lecciones.view.js";
import { viewLeccionInteractiva } from "../views/leccionInteractiva.view.js";
import { viewContacto } from "../views/contacto.view.js";

export const view = (tipo, params = new URLSearchParams()) => {
  const viewTipo = document.querySelector(`#app`);

  if (!viewTipo) {
    console.error("No se encontró ningún elemento <main> en el HTML.");
    return;
  }

  viewTipo.replaceChildren();
  viewTipo.className = "";
  switch (tipo) {
    case "home":
      viewTipo.classList.add("home-page");
      viewTipo.appendChild(viewHome());
      break;
    case "login":
      // 🛠️ CORRECCIÓN: Aísla el layout del login para evitar que las reglas de home afecten al main compartido.
      viewTipo.classList.add("login-main");
      viewTipo.appendChild(viewLogin());
      break;
    case "cursos":
    case "dashboard":
      viewTipo.appendChild(viewDashboard());
      break;
    case "unidades":
      viewTipo.appendChild(viewLecciones(params.get("curso")));
      break;
    case "leccion-interactiva":
      viewTipo.appendChild(
        viewLeccionInteractiva(
          params.get("curso") || "ingles",
          params.get("nivel") || "inicial",
          params.get("leccion") || 1,
        ),
      );
      break;
    case "perfil":
      viewTipo.appendChild(viewPerfil());
      break;
    case "clasificacion":
      viewTipo.appendChild(viewClasificacion());
      break;
    case "registrar":
      viewTipo.classList.add("login-main");
      viewTipo.appendChild(viewRegistrar());
      break;
    case "recuperar":
      viewTipo.classList.add("login-main");
      viewTipo.appendChild(viewRecuperar());
      break;
    case "contacto":
    case "mensaje":
      viewTipo.appendChild(viewContacto());
      break;
    default:
      console.warn(`No se encontró una vista para el tipo "${tipo}".`);
  }
};
