import { viewHome } from "../views/home.view.js";

export const view = (tipo) => {
  // let css = document.querySelector("#viewStyles");
  // if (!css) {
  //   css = document.createElement("link");
  //   css.id = "viewStyles";
  //   css.rel = "stylesheet";
  // }

  const viewTipo = document.querySelector(`#app`);

  if (!viewTipo) {
    console.error("No se encontró ningún elemento <main> en el HTML.");
    return;
  }

  viewTipo.replaceChildren();
  viewTipo.className = ""; // Limpiar cualquier clase existente

  switch (tipo) {
    case "home":
      // css.href = "./src/assets/css/viewhome/view.css";
      viewTipo.classList.add("home-page");
      viewTipo.appendChild(viewHome());
      break;
    case "login":
      viewTipo.appendChild(viewLoginPlaceholder());
      break;
    case "cursos":
      viewTipo.appendChild(viewCursosPlaceholder());
      break;
    case "perfil":
      viewTipo.appendChild(viewPerfilPlaceholder());
      break;
    case "dashboard":
      viewTipo.classList.add("dashboard-view");
      viewTipo.appendChild(viewDashboardPlaceholder());
      break;
    default:
      console.warn(`No se encontró una vista para el tipo "${tipo}".`);
  }
};

// Placeholders temporales para que no rompa al cambiar de ruta
function viewLoginPlaceholder() {
  const div = document.createElement("div");
  div.textContent = "Vista de Login en construcción";
  return div;
}
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
function viewDashboardPlaceholder() {
  const div = document.createElement("div");
  div.textContent = "Vista de Dashboard en construcción";
  return div;
}
