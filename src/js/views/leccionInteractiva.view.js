import {
  datosCursos,
  obtenerProgresoCurso,
} from "../../services/storage.service.js";
import {
  obtenerUsuarioActual,
  actualizarUsuario,
} from "../../services/login.service.js";

export function viewLeccionInteractiva(
  cursoClave = "ingles",
  nivelNombre = "inicial",
  leccionId = 1,
) {
  const fragmento = document.createDocumentFragment();
  // 🛠️ CORRECCIÓN: Construye la vista con nodos DOM para no interpretar contenido como HTML.
  const usuarioInicial = obtenerUsuarioActual();

  if (Number(usuarioInicial?.vidas ?? 3) <= 0) {
    const estado = document.createElement("section");
    estado.classList.add("estado-sin-vidas");
    estado.setAttribute("role", "alert");
    const titulo = document.createElement("h2");
    titulo.textContent = "Te quedaste sin vidas";
    const mensaje = document.createElement("p");
    mensaje.textContent =
      "Cierra sesión e inicia sesión nuevamente para recargarlas.";
    const volver = document.createElement("a");
    volver.href = `#unidades?curso=${encodeURIComponent(cursoClave)}`;
    volver.classList.add("btn", "btn-verde");
    volver.textContent = "Volver a lecciones";
    estado.appendChild(titulo);
    estado.appendChild(mensaje);
    estado.appendChild(volver);
    fragmento.appendChild(estado);
    return fragmento;
  }

  const curso = datosCursos[cursoClave];
  const leccion = curso?.obtenerLeccion(nivelNombre, leccionId);
  if (!leccion || leccion.preguntas.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No se encontró la lección solicitada.";
    fragmento.appendChild(mensaje);
    return fragmento;
  }

  const progresoInicial = obtenerProgresoCurso(usuarioInicial, cursoClave);
  const indiceLeccion = progresoInicial.lecciones.findIndex(
    (item) =>
      item.nivel === nivelNombre && item.leccionId === Number(leccionId),
  );
  const claveLeccion = `${nivelNombre}:${leccion.id}`;
  const leccionYaCompletada =
    progresoInicial.leccionesCompletadas.includes(claveLeccion) ||
    indiceLeccion < progresoInicial.indiceActual;

  if (indiceLeccion > progresoInicial.indiceActual && !leccionYaCompletada) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Completa las lecciones anteriores para continuar.";
    const volver = document.createElement("a");
    volver.href = `#unidades?curso=${encodeURIComponent(cursoClave)}`;
    volver.classList.add("btn", "btn-verde");
    volver.textContent = "Volver a lecciones";
    fragmento.appendChild(mensaje);
    fragmento.appendChild(volver);
    return fragmento;
  }

  const preguntaActual = leccion.preguntas[0];
  const respuestaCorrecta = preguntaActual.respuestaCorrecta;
  let palabrasDisponibles;
  if (
    preguntaActual.opciones &&
    preguntaActual.opciones.length > 0 &&
    preguntaActual.opciones[0].includes(" ")
  ) {
    palabrasDisponibles = [...respuestaCorrecta.split(" "), "please"];
  } else if (preguntaActual.opciones) {
    palabrasDisponibles = [...preguntaActual.opciones];
  } else {
    palabrasDisponibles = respuestaCorrecta.split(" ");
  }
  palabrasDisponibles.sort(() => Math.random() - 0.5);

  const contenedor = document.createElement("section");
  contenedor.classList.add("contenedor-principal");
  const constructorOracion = document.createElement("div");
  constructorOracion.classList.add("duo-builder");
  const subtitulo = document.createElement("span");
  subtitulo.classList.add("subtitulo");
  subtitulo.textContent = `Lección: ${leccion.titulo}`;
  const pregunta = document.createElement("h3");
  pregunta.textContent = preguntaActual.pregunta;
  const zonaRespuesta = document.createElement("div");
  zonaRespuesta.id = "answer-zone";
  zonaRespuesta.classList.add("answer-zone");
  const separador = document.createElement("hr");
  const bancoPalabras = document.createElement("div");
  bancoPalabras.id = "word-bank";
  bancoPalabras.classList.add("word-bank");
  const botonComprobar = document.createElement("button");
  botonComprobar.id = "check-sentence-btn";
  botonComprobar.classList.add("check-btn");
  botonComprobar.textContent = "Comprobar";
  const retroalimentacion = document.createElement("p");
  retroalimentacion.id = "sentence-feedback";
  retroalimentacion.classList.add("feedback");
  const contenedorVolver = document.createElement("div");
  contenedorVolver.style.marginTop = "20px";
  const enlaceVolver = document.createElement("a");
  enlaceVolver.href = `#unidades?curso=${encodeURIComponent(cursoClave)}`;
  enlaceVolver.classList.add("btn", "btn-nav");
  enlaceVolver.textContent = "Volver a Lecciones";
  contenedorVolver.appendChild(enlaceVolver);
  constructorOracion.appendChild(subtitulo);
  constructorOracion.appendChild(pregunta);
  constructorOracion.appendChild(zonaRespuesta);
  constructorOracion.appendChild(separador);
  constructorOracion.appendChild(bancoPalabras);
  constructorOracion.appendChild(botonComprobar);
  constructorOracion.appendChild(retroalimentacion);
  constructorOracion.appendChild(contenedorVolver);
  contenedor.appendChild(constructorOracion);

  const actualizarEstadoVidas = (vidas, errores) => {
    const indicadorVidas = document.querySelector(".stat-item.vidas");
    if (!indicadorVidas) {
      return;
    }

    const corazones = indicadorVidas.querySelector(".vidas-corazones");
    const textoVidas = indicadorVidas.querySelector("strong");
    const contadorErrores = indicadorVidas.querySelector(".errores-vida");
    if (corazones) {
      corazones.textContent = `${"❤️".repeat(vidas)}${"🤍".repeat(3 - vidas)}`;
    }
    if (textoVidas) {
      textoVidas.textContent = `Vidas: ${vidas}`;
    }
    if (contadorErrores) {
      contadorErrores.textContent = `Errores: ${errores}/3`;
    }
  };

  const renderizarBloqueoSinVidas = () => {
    const estado = document.createElement("div");
    estado.classList.add("estado-sin-vidas");
    estado.setAttribute("role", "alert");
    const titulo = document.createElement("h2");
    titulo.textContent = "Te quedaste sin vidas";
    const mensaje = document.createElement("p");
    mensaje.textContent =
      "Cierra sesión e inicia sesión nuevamente para recargarlas.";
    const volver = document.createElement("a");
    volver.href = `#unidades?curso=${encodeURIComponent(cursoClave)}`;
    volver.classList.add("btn", "btn-verde");
    volver.textContent = "Volver a lecciones";
    estado.appendChild(titulo);
    estado.appendChild(mensaje);
    estado.appendChild(volver);
    duoBuilder.replaceChildren(estado);
  };

  palabrasDisponibles.forEach((palabra) => {
    const ficha = document.createElement("button");
    ficha.type = "button";
    ficha.classList.add("word-chip");
    ficha.dataset.palabra = palabra;
    ficha.textContent = palabra;
    bancoPalabras.appendChild(ficha);
  });

  bancoPalabras.addEventListener("click", (event) => {
    const ficha = event.target.closest(".word-chip");
    if (ficha && bancoPalabras.contains(ficha)) {
      zonaRespuesta.appendChild(ficha);
    }
  });

  zonaRespuesta.addEventListener("click", (event) => {
    const ficha = event.target.closest(".word-chip");
    if (ficha && zonaRespuesta.contains(ficha)) {
      bancoPalabras.appendChild(ficha);
    }
  });

  botonComprobar.addEventListener("click", () => {
    const usuarioActual = obtenerUsuarioActual();
    if (!usuarioActual) {
      retroalimentacion.textContent =
        "No se pudo verificar el estado de la cuenta.";
      retroalimentacion.style.color = "#ff4b4b";
      return;
    }
    if (Number(usuarioActual.vidas ?? 3) <= 0) {
      renderizarBloqueoSinVidas();
      return;
    }

    const fichasSeleccionadas = zonaRespuesta.querySelectorAll(".word-chip");
    if (fichasSeleccionadas.length === 0) {
      retroalimentacion.textContent = "¡Primero debes armar una oración!";
      retroalimentacion.style.color = "orange";
      return;
    }

    const respuestaUsuario = Array.from(fichasSeleccionadas)
      .map((ficha) => ficha.dataset.palabra)
      .join(" ");

    if (respuestaUsuario === respuestaCorrecta) {
      if (leccionYaCompletada) {
        retroalimentacion.textContent =
          "¡Correcto! Esta lección ya estaba completada.";
        retroalimentacion.style.color = "#58cc02";
        botonComprobar.disabled = true;
        return;
      }

      const leccionesCompletadas = [
        ...new Set([...progresoInicial.leccionesCompletadas, claveLeccion]),
      ];
      const siguienteLeccion =
        progresoInicial.lecciones[indiceLeccion + 1] ||
        progresoInicial.lecciones[indiceLeccion];
      const progresoCursos = {
        ...(usuarioActual.progresoCursos || {}),
        [cursoClave]: {
          nivel: siguienteLeccion.nivel,
          leccionId: siguienteLeccion.leccionId,
          leccionesCompletadas,
        },
      };
      const resultado = actualizarUsuario(usuarioActual.nombre, {
        xp: (Number(usuarioActual.xp) || 0) + 50,
        idiomaActual: cursoClave,
        nivelActual: siguienteLeccion.nivel,
        leccionActual: {
          nivel: siguienteLeccion.nivel,
          leccionId: siguienteLeccion.leccionId,
        },
        progresoCursos,
      });

      if (!resultado.exitoso) {
        retroalimentacion.textContent = resultado.mensaje;
        retroalimentacion.style.color = "#ff4b4b";
        return;
      }

      retroalimentacion.textContent =
        "¡Excelente! Respuesta correcta 🎉 (+50 XP)";
      retroalimentacion.style.color = "#58cc02";
      const progresoActualizado = obtenerProgresoCurso(
        { ...usuarioActual, progresoCursos },
        cursoClave,
      );
      const barraProgreso = document.querySelector("#progreso");
      const valorProgreso = document.querySelector(".progreso-valor");
      if (barraProgreso) {
        barraProgreso.value = progresoActualizado.porcentaje;
        barraProgreso.setAttribute(
          "aria-label",
          `Progreso del curso: ${progresoActualizado.porcentaje}%`,
        );
      }
      if (valorProgreso) {
        valorProgreso.textContent = `${progresoActualizado.porcentaje}%`;
      }
      const indicadorXp = document.querySelector(".stat-item.xp strong");
      if (indicadorXp) {
        indicadorXp.textContent = `${(Number(usuarioActual.xp) || 0) + 50} XP`;
      }
      botonComprobar.disabled = true;
    } else {
      const erroresPrevios = Number(usuarioActual.erroresParaPerderVida) || 0;
      const vidasActuales = Number.isFinite(Number(usuarioActual.vidas))
        ? Math.max(0, Number(usuarioActual.vidas))
        : 3;
      const erroresTotales = erroresPrevios + 1;
      const perdioVida = erroresTotales >= 3;
      const vidasRestantes = perdioVida
        ? Math.max(0, vidasActuales - 1)
        : vidasActuales;
      const erroresSiguienteVida = perdioVida ? 0 : erroresTotales;
      const resultado = actualizarUsuario(usuarioActual.nombre, {
        vidas: vidasRestantes,
        erroresParaPerderVida: erroresSiguienteVida,
      });

      if (!resultado.exitoso) {
        retroalimentacion.textContent = resultado.mensaje;
        retroalimentacion.style.color = "#ff4b4b";
        return;
      }

      actualizarEstadoVidas(vidasRestantes, erroresSiguienteVida);
      retroalimentacion.textContent = perdioVida
        ? `Perdiste una vida. Errores reiniciados: 0/3. Te quedan ${vidasRestantes}.`
        : `Respuesta incorrecta. Errores: ${erroresTotales}/3. Te quedan ${vidasRestantes} vidas.`;
      retroalimentacion.style.color = "#ff4b4b";
      if (vidasRestantes === 0) {
        renderizarBloqueoSinVidas();
      }
    }
  });

  fragmento.appendChild(contenedor);
  return fragmento;
}
