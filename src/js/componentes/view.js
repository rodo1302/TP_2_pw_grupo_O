import { viewHome } from "../views/home.view.js";
import { viewLogin, hydrateLoginView } from "../views/login.view.js";
import { viewDashboard } from "../views/dashboard.view.js";

export const view = (tipo) => {
  let css = document.querySelector("#viewStyles");
  if (!css) {
    css = document.createElement("link");
    css.id = "viewStyles";
    css.rel = "stylesheet";
    document.head.appendChild(css);
  }
  const viewTipo = document.querySelector(`#app`);

  if (!viewTipo) {
    console.error("No se encontró ningún elemento <main> en el HTML.");
    return;
  }

  viewTipo.replaceChildren();
  viewTipo.className = ""; // Limpiar cualquier clase existente

  switch (tipo) {
    case "home":
      css.href = "./src/assets/css/viewhome/view.css";
      viewTipo.classList.add("home-page");
      viewTipo.appendChild(viewHome());
      // hydrateHomeView(viewTipo); //hidrata todos los elementos interactivos de la vista home
      break;
    case "login":
      css.href = "./src/assets/css/viewlogin/view.css";
      viewTipo.appendChild(viewLogin());
      hydrateLoginView(viewTipo); //hidrata todos los elementos interactivos de la vista login
      break;
    case "cursos":
      viewTipo.appendChild(viewCursosPlaceholder());
      break;
    case "perfil":
      viewTipo.appendChild(viewPerfilPlaceholder());
      break;
    case "dashboard":
      css.href = "./src/assets/css/viewdashboard/view.css";
      viewTipo.classList.add("dashboard-layout");
      viewTipo.appendChild(viewDashboard());
      break;
    default:
      console.warn(`No se encontró una vista para el tipo "${tipo}".`);
  }
};

// Placeholders temporales para que no rompa al cambiar de ruta

function viewCursosPlaceholder() {
  const div = document.createElement("div");
  div.textContent = "Vista de Cursos en construcción";
  return div;
}
function viewPerfilPlaceholder() {
  const div = document.createElement("div");
  div.textContent = "Vista de Perfil en construcción";
  return div;
}
