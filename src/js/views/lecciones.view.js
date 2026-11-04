import {
  datosCursos,
  obtenerProgresoCurso,
} from "../../services/storage.service.js";
import { obtenerUsuarioActual } from "../../services/login.service.js";

export function viewLecciones(cursoClave = null) {
  const fragmento = document.createDocumentFragment();
  // 🛠️ CORRECCIÓN: Construye la vista con nodos DOM para no interpretar contenido como HTML.
  const claveCurso =
    cursoClave || localStorage.getItem("cursoActual") || "ingles";
  const curso = datosCursos[claveCurso] || datosCursos.ingles;
  const cursoActivo = datosCursos[claveCurso] ? claveCurso : "ingles";
  const usuarioActual = obtenerUsuarioActual();
  const vidasAgotadas = Number(usuarioActual?.vidas ?? 3) <= 0;
  const progreso = obtenerProgresoCurso(usuarioActual, cursoActivo);
  const indiceLeccionActual = progreso.indiceActual || 0;
  const leccionesOrdenadas = progreso.lecciones;
  localStorage.setItem("cursoActual", cursoActivo);

  const unidades = [
    { clave: "inicial", numero: 1, subtitulo: "Fundamentos y Saludos" },
    { clave: "medio", numero: 2, subtitulo: "Comidas y Rutina" },
    { clave: "avanzado", numero: 3, subtitulo: "Viajes y Negocios" },
  ];

  const distribucion = document.createElement("section");
  distribucion.classList.add("unidades-layout");

  if (vidasAgotadas) {
    const aviso = document.createElement("p");
    aviso.classList.add("aviso-sin-vidas");
    aviso.setAttribute("role", "alert");
    aviso.textContent =
      "Te quedaste sin vidas. Cierra sesión e inicia sesión nuevamente para recargarlas.";
    distribucion.appendChild(aviso);
  }

  unidades.forEach((unidad) => {
    const seccionUnidad = document.createElement("section");
    seccionUnidad.classList.add("seccion-unidades");
    const encabezado = document.createElement("div");
    encabezado.classList.add("titulo-unidades");
    const numeroUnidad = document.createElement("h2");
    numeroUnidad.textContent = `Unidad ${unidad.numero}`;
    const subtituloUnidad = document.createElement("h3");
    subtituloUnidad.textContent = unidad.subtitulo;
    encabezado.appendChild(numeroUnidad);
    encabezado.appendChild(subtituloUnidad);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("contenedor-tarjetas");
    const lecciones = curso.niveles[unidad.clave] || [];

    lecciones.forEach((leccion, indice) => {
      const indiceLeccion = leccionesOrdenadas.findIndex(
        (item) =>
          item.nivel === unidad.clave && item.leccionId === leccion.id,
      );
      const completada =
        indiceLeccion < indiceLeccionActual ||
        progreso.leccionesCompletadas.includes(
          `${unidad.clave}:${leccion.id}`,
        );
      const enCurso = indiceLeccion === indiceLeccionActual && !completada;
      const claseTarjeta = completada
        ? "completada"
        : enCurso
          ? "activa"
          : "bloqueada";
      const claseInsignia = completada
        ? "verde"
        : enCurso
          ? "naranja"
          : "gris";
      const textoEstado = completada
        ? "Completada"
        : enCurso
          ? "En curso"
          : "Bloqueada";
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta-unidad", claseTarjeta);
      const insignia = document.createElement("div");
      insignia.classList.add("status-badge", claseInsignia);
      const icono = document.createElement("span");
      icono.classList.add("icon");
      icono.textContent = completada ? "✓" : enCurso ? "⚡" : "🔒";
      insignia.appendChild(icono);
      insignia.appendChild(
        document.createTextNode(` Lección ${leccion.id || indice + 1}`),
      );

      const titulo = document.createElement("h3");
      titulo.classList.add("unidad-titulo");
      titulo.textContent = leccion.titulo;
      const estado = document.createElement("span");
      estado.classList.add("unidad-estado-texto");
      if (enCurso) {
        estado.classList.add("resaltado");
      } else if (!completada) {
        estado.classList.add("bloqueada");
      }
      estado.textContent = textoEstado;

      if (vidasAgotadas || (!completada && !enCurso)) {
        const etiquetaBloqueada = document.createElement("span");
        etiquetaBloqueada.classList.add("btn", "btn-bloqueado");
        etiquetaBloqueada.setAttribute("aria-disabled", "true");
        etiquetaBloqueada.textContent = vidasAgotadas ? "Sin vidas" : "Bloqueada";
        tarjeta.appendChild(insignia);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(etiquetaBloqueada);
      } else {
        const enlace = document.createElement("a");
        enlace.href = `#leccion-interactiva?curso=${encodeURIComponent(cursoActivo)}&nivel=${encodeURIComponent(unidad.clave)}&leccion=${encodeURIComponent(leccion.id)}`;
        enlace.classList.add(
          "btn",
          completada ? "btn-verde" : "boton-continuar",
        );
        if (enCurso) {
          enlace.setAttribute("aria-current", "step");
        }
        enlace.textContent = completada ? "Repasar" : "Continuar";
        tarjeta.appendChild(insignia);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(enlace);
      }
      tarjetas.appendChild(tarjeta);
    });

    seccionUnidad.appendChild(encabezado);
    seccionUnidad.appendChild(tarjetas);
    distribucion.appendChild(seccionUnidad);
  });

  fragmento.appendChild(distribucion);
  return fragmento;
}
