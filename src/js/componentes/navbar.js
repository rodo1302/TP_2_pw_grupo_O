import {
  obtenerUsuarioActual,
  cerrarSesion,
} from "../../services/login.service.js";
import {
  datosCursos,
  obtenerProgresoCurso,
} from "../../services/storage.service.js";

export const navbar = (tipo) => {
  const headerTipo = document.querySelector(`header`);

  if (!headerTipo) {
    console.error("No se encontró ningún elemento <header> en el HTML.");
    return;
  }

  headerTipo.replaceChildren();
  const usuarioActual = obtenerUsuarioActual();

  // 🛠️ CORRECCIÓN: El usuario actual se guarda como texto plano, no como JSON.
  switch (tipo) {
    case "home":
      headerTipo.appendChild(crearNavbarInicio());
      break;
    case "login":
      headerTipo.appendChild(crearNavbarIngreso());
      break;
    case "registrar":
      headerTipo.appendChild(crearNavbarIngreso());
      break;
    case "recuperar":
      headerTipo.appendChild(crearNavbarIngreso());
      break;
    case "dashboard":
      headerTipo.appendChild(crearNavbarAutenticado(tipo));
      break;
    case "cursos":
      headerTipo.appendChild(crearNavbarAutenticado(tipo));
      break;
    case "unidades":
    case "leccion-interactiva":
      headerTipo.appendChild(crearNavbarAutenticado(tipo));
      break;
    case "perfil":
      headerTipo.appendChild(crearNavbarAutenticado(tipo));
      break;
    case "clasificacion":
    case "contacto":
    case "mensaje":
      headerTipo.appendChild(crearNavbarAutenticado(tipo));
      break;
    default:
      console.warn(`No se encontró un navbar para el tipo "${tipo}".`);
  }

  function crearNavbarInicio() {
    const fragmento = document.createDocumentFragment();

    const enlaceMarca = document.createElement("a");
    enlaceMarca.href = "#home";
    enlaceMarca.classList.add("logo-marca");

    const imagenMarca = document.createElement("img");
    imagenMarca.src = "./src/assets/img/logo-lingo.svg";
    imagenMarca.alt = "Lingo Panda";
    imagenMarca.classList.add("img-logo");

    const textoMarca = document.createElement("span");
    textoMarca.classList.add("nombre-brand");
    textoMarca.textContent = "LingoPanda";
    enlaceMarca.append(imagenMarca, textoMarca);

    const botonIngreso = document.createElement("button");
    botonIngreso.classList.add("btn", "btn-verde");
    botonIngreso.textContent = "Entrar";
    botonIngreso.addEventListener("click", () => {
      window.location.hash = "#login";
    });

    fragmento.append(enlaceMarca, botonIngreso);

    return fragmento;
  }

  function crearNavbarIngreso() {
    const vistaOrigen = sessionStorage.getItem("vistaOrigen");

    const fragmento = document.createDocumentFragment();

    const enlaceMarca = document.createElement("a");
    if (vistaOrigen === "perfil") {
      enlaceMarca.href = "#recuperar";
    } else {
      enlaceMarca.href = "#home";
    }
    enlaceMarca.classList.add("logo-marca");

    const imagenMarca = document.createElement("img");
    imagenMarca.src = "./src/assets/img/logo-lingo.svg";
    imagenMarca.alt = "Lingo Panda";
    imagenMarca.classList.add("img-logo");

    const textoMarca = document.createElement("span");
    textoMarca.classList.add("nombre-brand");
    textoMarca.textContent = "LingoPanda";
    enlaceMarca.append(imagenMarca, textoMarca);

    const navegacion = document.createElement("nav");
    navegacion.classList.add("contenedor-nav");
    const textoNavegacion = document.createElement("span");
    textoNavegacion.textContent =
      "Aprende Inglés, Alemán y Chino gratis y de forma divertida";
    navegacion.appendChild(textoNavegacion);

    fragmento.append(enlaceMarca, navegacion);

    return fragmento;
  }

  // 🛠️ CORRECCIÓN: Reutiliza el navbar autenticado en todas sus rutas y evita referencias a constructores inexistentes.
  function crearNavbarAutenticado(rutaActiva) {
    const fragmento = document.createDocumentFragment();
    const parametrosRuta = new URLSearchParams(
      window.location.hash.split("?")[1] || "",
    );
    const cursoSolicitado = parametrosRuta.get("curso");
    const cursoGuardado = localStorage.getItem("cursoActual");
    const cursoActivo = datosCursos[cursoSolicitado]
      ? cursoSolicitado
      : datosCursos[cursoGuardado]
        ? cursoGuardado
        : datosCursos[usuarioActual?.idiomaActual]
          ? usuarioActual.idiomaActual
          : "ingles";
    const enlaceMarca = document.createElement("a");
    enlaceMarca.href = "#dashboard";
    enlaceMarca.classList.add("logo-marca");

    const imagenMarca = document.createElement("img");
    imagenMarca.src = "./src/assets/img/logo-lingo.svg";
    imagenMarca.alt = "Lingo Panda";
    imagenMarca.classList.add("img-logo");

    const textoMarca = document.createElement("span");
    textoMarca.classList.add("nombre-brand");
    textoMarca.textContent = "LingoPanda";
    enlaceMarca.append(imagenMarca, textoMarca);

    const navegacion = document.createElement("nav");
    navegacion.classList.add("contenedor-nav");

    if (rutaActiva === "leccion-interactiva") {
      // 🛠️ CORRECCIÓN: Muestra el progreso solo durante una lección interactiva, no en el resto de vistas autenticadas.
      const progresoCurso = obtenerProgresoCurso(usuarioActual, cursoActivo);
      const barraProgreso = document.createElement("div");
      barraProgreso.classList.add("progreso-bar");

      const etiquetaProgreso = document.createElement("label");
      etiquetaProgreso.htmlFor = "progreso";
      const textoEtiquetaProgreso = document.createElement("strong");
      textoEtiquetaProgreso.textContent = "Progreso:";
      etiquetaProgreso.appendChild(textoEtiquetaProgreso);

      const elementoProgreso = document.createElement("progress");
      elementoProgreso.id = "progreso";
      elementoProgreso.max = 100;
      elementoProgreso.value = progresoCurso.porcentaje;
      elementoProgreso.setAttribute(
        "aria-label",
        `Progreso del curso: ${progresoCurso.porcentaje}%`,
      );

      const valorProgreso = document.createElement("span");
      valorProgreso.classList.add("progreso-valor");
      valorProgreso.textContent = `${progresoCurso.porcentaje}%`;
      barraProgreso.append(etiquetaProgreso, elementoProgreso, valorProgreso);
      navegacion.appendChild(barraProgreso);
    }

    const listaMenu = document.createElement("ul");
    listaMenu.classList.add("menu-enlaces");

    const opcionesMenu = [
      {
        etiqueta: "Curso",
        ruta: "#dashboard",
        activo: [
          "dashboard",
          "cursos",
          "unidades",
          "leccion-interactiva",
        ].includes(rutaActiva),
      },
      { etiqueta: "Perfil", ruta: "#perfil", activo: rutaActiva === "perfil" },
      {
        etiqueta: "Clasificación",
        ruta: "#clasificacion",
        activo: rutaActiva === "clasificacion",
      },
    ];

    opcionesMenu.forEach((opcion) => {
      const elementoLista = document.createElement("li");
      const enlace = document.createElement("a");
      enlace.href = opcion.ruta;
      enlace.textContent = opcion.etiqueta;
      enlace.classList.add("btn", "btn-nav");
      if (opcion.activo) {
        enlace.classList.add("activo");
      }
      elementoLista.appendChild(enlace);
      listaMenu.appendChild(elementoLista);
    });
    const botonCerrarSesion = document.createElement("button");
    botonCerrarSesion.classList.add("btn", "btn-rojo");
    botonCerrarSesion.setAttribute("aria-label", "Cerrar sesión");
    // 🛠️ CORRECCIÓN: Centraliza el cierre de sesión para mantener el estado y la navegación sincronizados.
    botonCerrarSesion.addEventListener("click", () => {
      const confirmar = window.confirm(
        "¿Estás seguro de que deseas cerrar sesión?",
      );
      if (confirmar) {
        cerrarSesion();
      }
    });

    const imagenCerrarSesion = document.createElement("img");
    imagenCerrarSesion.src = "./src/assets/img/cerrar-sesion.svg";
    imagenCerrarSesion.alt = "Salir";
    imagenCerrarSesion.classList.add("img-icono-salir");
    botonCerrarSesion.appendChild(imagenCerrarSesion);

    const indicadores = document.createElement("aside");
    indicadores.classList.add("indicadores-header");

    const insigniaUsuario = document.createElement("span");
    insigniaUsuario.classList.add("user-badge");
    insigniaUsuario.textContent = `👤 ${usuarioActual?.nombre || "Invitado"}`;

    const vidas = Number.isFinite(Number(usuarioActual?.vidas))
      ? Math.min(3, Math.max(0, Number(usuarioActual.vidas)))
      : 3;
    const vidasP = document.createElement("p");
    vidasP.classList.add("stat-item", "vidas");
    const corazones = document.createElement("span");
    corazones.classList.add("vidas-corazones");
    corazones.setAttribute("aria-hidden", "true");
    corazones.textContent = `${"❤️".repeat(vidas)}${"🤍".repeat(3 - vidas)}`;
    const vidasStrong = document.createElement("strong");
    vidasStrong.textContent = `Vidas: ${vidas}`;
    vidasP.append(corazones, vidasStrong);

    const xpP = document.createElement("p");
    xpP.classList.add("stat-item", "xp");
    const xpStrong = document.createElement("strong");
    xpStrong.textContent = `${Number(usuarioActual?.xp) || 0} XP`;
    xpP.append("💎 ", xpStrong);

    indicadores.append(insigniaUsuario, vidasP, xpP);

    if (rutaActiva !== "leccion-interactiva") {
      navegacion.appendChild(listaMenu);
    }
    fragmento.append(enlaceMarca, navegacion, botonCerrarSesion, indicadores);

    return fragmento;
  }
};
