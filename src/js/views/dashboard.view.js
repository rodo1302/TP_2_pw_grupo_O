import {
  datosCursos,
  obtenerProgresoCurso,
} from "../../services/storage.service.js";
import { obtenerUsuarioActual } from "../../services/login.service.js";

export function viewDashboard() {
  const fragmento = document.createDocumentFragment();
  // 🛠️ CORRECCIÓN: Construye la vista con nodos DOM para no interpretar contenido como HTML.
  const usuarioActual = obtenerUsuarioActual() || {
    xp: 350,
    liga: "bronce",
    idiomaActual: "ingles",
    nivelActual: "inicial",
  };

  const panel = document.createElement("section");
  panel.classList.add("dashboard-layout");
  const seccionCursos = document.createElement("section");
  seccionCursos.classList.add("seccion-cursos");
  const tituloCursos = document.createElement("h2");
  tituloCursos.textContent = "Mis Cursos";
  const tarjetasCursos = document.createElement("div");
  tarjetasCursos.classList.add("contenedor-tarjetas");

  Object.entries(datosCursos).forEach(([clave, curso]) => {
    const tarjetaCurso = document.createElement("div");
    tarjetaCurso.classList.add("enlace-tarjeta");

    const casillaOcultar = document.createElement("input");
    casillaOcultar.type = "checkbox";
    casillaOcultar.name = clave;
    casillaOcultar.id = `curso-${clave}`;
    casillaOcultar.classList.add("disable");

    const etiquetaOcultar = document.createElement("label");
    etiquetaOcultar.htmlFor = `curso-${clave}`;
    etiquetaOcultar.classList.add("btn", "btn-rojo", "btn-chk");
    etiquetaOcultar.setAttribute("aria-label", `Ocultar curso ${curso.nombre}`);
    etiquetaOcultar.textContent = "-";

    const enlaceCurso = document.createElement("a");
    enlaceCurso.href = `#unidades?curso=${encodeURIComponent(clave)}`;
    enlaceCurso.classList.add("curso-enlace");
    const contenidoTarjeta = document.createElement("article");
    contenidoTarjeta.classList.add("tarjeta-curso");
    const banderaCurso = document.createElement("img");
    banderaCurso.src = curso.icono;
    banderaCurso.alt = `Bandera de ${curso.nombre}`;
    banderaCurso.classList.add("img-bandera");

    const infoCurso = document.createElement("div");
    infoCurso.classList.add("info-curso");
    const nombreCurso = document.createElement("h3");
    nombreCurso.textContent = curso.nombre;
    const infoProgreso = document.createElement("p");
    const etiquetaProgreso = document.createElement("strong");
    etiquetaProgreso.textContent = "Progreso:";
    const progresoCurso = obtenerProgresoCurso(usuarioActual, clave);
    infoProgreso.appendChild(etiquetaProgreso);
    infoProgreso.appendChild(
      document.createTextNode(` ${progresoCurso.porcentaje}%`),
    );

    const infoNivel = document.createElement("p");
    const etiquetaNivel = document.createElement("strong");
    etiquetaNivel.textContent = "Nivel:";
    const esCursoActivo = usuarioActual.idiomaActual === clave;
    const nivelActual = esCursoActivo ? progresoCurso.nivel : "Principiante";
    const nivelFormateado =
      nivelActual.charAt(0).toUpperCase() + nivelActual.slice(1);
    infoNivel.appendChild(etiquetaNivel);
    infoNivel.appendChild(document.createTextNode(` ${nivelFormateado}`));
    infoCurso.appendChild(nombreCurso);
    infoCurso.appendChild(infoProgreso);
    infoCurso.appendChild(infoNivel);

    contenidoTarjeta.appendChild(banderaCurso);
    contenidoTarjeta.appendChild(infoCurso);
    enlaceCurso.appendChild(contenidoTarjeta);
    tarjetaCurso.appendChild(casillaOcultar);
    tarjetaCurso.appendChild(etiquetaOcultar);
    tarjetaCurso.appendChild(enlaceCurso);
    tarjetasCursos.appendChild(tarjetaCurso);
  });

  const casillaMostrar = document.createElement("input");
  casillaMostrar.type = "checkbox";
  casillaMostrar.name = "mostrar";
  casillaMostrar.id = "mostrar";
  casillaMostrar.classList.add("mostrar-cursos");
  const etiquetaMostrar = document.createElement("label");
  etiquetaMostrar.htmlFor = "mostrar";
  etiquetaMostrar.classList.add("btn", "btn-mostrar-cursos");
  etiquetaMostrar.textContent = "Mostrar cursos";
  tarjetasCursos.appendChild(casillaMostrar);
  tarjetasCursos.appendChild(etiquetaMostrar);
  seccionCursos.appendChild(tituloCursos);
  seccionCursos.appendChild(tarjetasCursos);

  const sidebar = document.createElement("aside");
  sidebar.classList.add("panel-lateral");
  const resumen = document.createElement("div");
  resumen.classList.add("tarjeta-resumen");
  const tituloResumen = document.createElement("h2");
  tituloResumen.textContent = "Estadísticas";

  const elementoLiga = document.createElement("div");
  elementoLiga.classList.add("item-estadistica");
  const iconoLiga = document.createElement("img");
  iconoLiga.src = "./src/assets/img/liga.svg";
  iconoLiga.alt = "Icono de Liga";
  iconoLiga.classList.add("img-icono-aside");
  const infoLiga = document.createElement("div");
  const subtituloLiga = document.createElement("span");
  subtituloLiga.classList.add("subtitulo");
  subtituloLiga.textContent = "Liga actual";
  const valorLiga = document.createElement("p");
  valorLiga.classList.add("valor-destacado");
  const liga = usuarioActual.liga || "bronce";
  valorLiga.textContent = `Liga ${liga.charAt(0).toUpperCase() + liga.slice(1)}`;
  infoLiga.appendChild(subtituloLiga);
  infoLiga.appendChild(valorLiga);
  elementoLiga.appendChild(iconoLiga);
  elementoLiga.appendChild(infoLiga);

  const elementoMeta = document.createElement("div");
  elementoMeta.classList.add("item-estadistica");
  const iconoMeta = document.createElement("img");
  iconoMeta.src = "./src/assets/img/meta.svg";
  iconoMeta.alt = "Icono de Meta";
  iconoMeta.classList.add("img-icono-aside");
  const infoMeta = document.createElement("div");
  const subtituloMeta = document.createElement("span");
  subtituloMeta.classList.add("subtitulo");
  subtituloMeta.textContent = "Meta diaria";
  const valorMeta = document.createElement("p");
  valorMeta.classList.add("valor-destacado");
  valorMeta.textContent = "50 XP / día";
  infoMeta.appendChild(subtituloMeta);
  infoMeta.appendChild(valorMeta);
  elementoMeta.appendChild(iconoMeta);
  elementoMeta.appendChild(infoMeta);

  resumen.appendChild(tituloResumen);
  resumen.appendChild(elementoLiga);
  resumen.appendChild(elementoMeta);
  sidebar.appendChild(resumen);
  panel.appendChild(seccionCursos);
  panel.appendChild(sidebar);
  fragmento.appendChild(panel);
  return fragmento;
}
