import {
  obtenerUsuarioActual,
  obtenerUsuarios,
} from "../../services/login.service.js";
import { usuariosDePrueba } from "../../services/storage.service.js";

let ligaActualFiltro = null;

export function viewClasificacion() {
  const fragmento = document.createDocumentFragment();
  // 🛠️ CORRECCIÓN: Construye la vista con nodos DOM para no interpretar contenido como HTML.
  const usuarioActual = obtenerUsuarioActual();
  const usuariosLocales = obtenerUsuarios() || [];
  if (!ligaActualFiltro) {
    const ligaUsuario = usuarioActual && usuarioActual.liga;
    ligaActualFiltro = ["oro", "plata", "bronce"].includes(ligaUsuario)
      ? ligaUsuario
      : "bronce";
  }

  const usuariosDeLiga = usuariosDePrueba
    .filter((usuario) => usuario.liga === ligaActualFiltro)
    .map((usuario) => ({
      estudiante: usuario.apodo || usuario.nombre,
      xp: Number(usuario.xp) || 0,
      liga: usuario.liga,
    }));
  const usuariosReales = usuariosLocales.map((usuario) => ({
    estudiante: usuario.nombre,
    xp: Number(usuario.xp) || 0,
    liga: usuario.liga || "bronce",
  }));
  const usuariosEnLiga = [
    ...usuariosDeLiga,
    ...usuariosReales.filter((usuario) => usuario.liga === ligaActualFiltro),
  ];

  const usuarioEstaEnLista = usuariosEnLiga.some(
    (usuario) => usuario.estudiante === usuarioActual?.nombre,
  );
  if (
    usuarioActual &&
    !usuarioEstaEnLista &&
    usuarioActual.liga === ligaActualFiltro
  ) {
    usuariosEnLiga.push({
      estudiante: usuarioActual.nombre,
      xp: Number(usuarioActual.xp) || 0,
      liga: ligaActualFiltro,
    });
  }
  usuariosEnLiga.sort((usuarioA, usuarioB) => usuarioB.xp - usuarioA.xp);

  const nombreLiga =
    ligaActualFiltro.charAt(0).toUpperCase() + ligaActualFiltro.slice(1);
  const contenedor = document.createElement("section");
  contenedor.classList.add("contenedor-principal");

  const seccionLiga = document.createElement("section");
  seccionLiga.classList.add("liga-actual");
  const titulo = document.createElement("h2");
  titulo.classList.add("titulo");
  titulo.textContent = "Tabla de clasificación";
  const imagenLigas = document.createElement("img");
  imagenLigas.src = "./src/assets/img/ligas.svg";
  imagenLigas.alt = "Ligas";
  imagenLigas.classList.add("img-liga");
  const figuraLiga = document.createElement("figure");
  figuraLiga.classList.add("info-liga");
  const descripcionLiga = document.createElement("figcaption");
  descripcionLiga.classList.add("subtitulo");
  descripcionLiga.textContent = `Liga de ${nombreLiga}`;
  const imagenLiga = document.createElement("img");
  imagenLiga.src = `./src/assets/img/liga-${ligaActualFiltro}.svg`;
  imagenLiga.alt = `Liga de ${nombreLiga}`;
  imagenLiga.classList.add("img-liga-oro");
  figuraLiga.appendChild(descripcionLiga);
  figuraLiga.appendChild(imagenLiga);
  const informacionLiga = document.createElement("p");
  informacionLiga.textContent =
    "Los 2 primeros ascienden de categoría esta semana";
  seccionLiga.appendChild(titulo);
  seccionLiga.appendChild(imagenLigas);
  seccionLiga.appendChild(figuraLiga);
  seccionLiga.appendChild(informacionLiga);

  const seccionTabla = document.createElement("section");
  seccionTabla.classList.add("tabla");
  const tabla = document.createElement("table");
  const encabezadoTabla = document.createElement("thead");
  const filaEncabezado = document.createElement("tr");
  ["Puesto", "Estudiante", "XP Semanal", "Estado"].forEach((etiqueta) => {
    const celda = document.createElement("th");
    celda.textContent = etiqueta;
    filaEncabezado.appendChild(celda);
  });
  encabezadoTabla.appendChild(filaEncabezado);
  const cuerpoTabla = document.createElement("tbody");

  if (usuariosEnLiga.length > 0) {
    usuariosEnLiga.forEach((usuario, indice) => {
      const posicion = indice + 1;
      const fila = document.createElement("tr");
      if (posicion === 1) {
        fila.classList.add("primero");
      } else if (posicion === 2) {
        fila.classList.add("segundo");
      } else if (posicion === 3) {
        fila.classList.add("tercero");
      }
      const esUsuarioActual = usuario.estudiante === usuarioActual?.nombre;
      if (esUsuarioActual) {
        fila.classList.add("usuario", "activo");
      }

      const celdaPosicion = document.createElement("td");
      celdaPosicion.textContent =
        posicion === 1
          ? `🥇 ${posicion}`
          : posicion === 2
            ? `🥈 ${posicion}`
            : posicion === 3
              ? `🥉 ${posicion}`
              : String(posicion);
      const celdaEstudiante = document.createElement("td");
      celdaEstudiante.textContent = usuario.estudiante;
      const celdaXp = document.createElement("td");
      celdaXp.textContent = `${usuario.xp} XP`;
      const celdaEstado = document.createElement("td");
      celdaEstado.textContent =
        posicion <= 2 ? "Zona de Ascenso" : "Zona Segura";
      fila.appendChild(celdaPosicion);
      fila.appendChild(celdaEstudiante);
      fila.appendChild(celdaXp);
      fila.appendChild(celdaEstado);
      cuerpoTabla.appendChild(fila);
    });
  } else {
    const fila = document.createElement("tr");
    const celdaVacia = document.createElement("td");
    celdaVacia.colSpan = 4;
    celdaVacia.style.textAlign = "center";
    celdaVacia.textContent = "No hay usuarios en esta liga";
    fila.appendChild(celdaVacia);
    cuerpoTabla.appendChild(fila);
  }
  tabla.appendChild(encabezadoTabla);
  tabla.appendChild(cuerpoTabla);
  seccionTabla.appendChild(tabla);

  const otrasLigas = document.createElement("section");
  otrasLigas.classList.add("otras-ligas");
  ["oro", "plata", "bronce"].forEach((liga) => {
    if (liga === ligaActualFiltro) {
      return;
    }
    const boton = document.createElement("button");
    boton.type = "button";
    boton.classList.add("btn", "btn-nav", "btn-clas");
    boton.dataset.liga = liga;
    boton.textContent = `Ir a Liga de ${liga.charAt(0).toUpperCase() + liga.slice(1)}`;
    boton.addEventListener("click", () => {
      ligaActualFiltro = liga;
      document.querySelector("#app").replaceChildren(viewClasificacion());
    });
    otrasLigas.appendChild(boton);
  });

  contenedor.appendChild(seccionLiga);
  contenedor.appendChild(seccionTabla);
  contenedor.appendChild(otrasLigas);
  fragmento.appendChild(contenedor);
  return fragmento;
}
