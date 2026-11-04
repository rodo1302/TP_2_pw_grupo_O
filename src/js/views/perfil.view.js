import {
  obtenerUsuarioActual,
  cerrarSesion,
  actualizarUsuario,
} from "../../services/login.service.js";

export function viewPerfil() {
  const fragmento = document.createDocumentFragment();
  // 🛠️ CORRECCIÓN: Construye la vista con nodos DOM para no interpretar contenido como HTML.
  const datosUsuario = obtenerUsuarioActual();
  if (!datosUsuario) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No se pudieron cargar los datos de tu cuenta.";
    fragmento.appendChild(mensaje);
    return fragmento;
  }

  const contenedor = document.createElement("section");
  contenedor.classList.add("contenedor-perfil");

  const tarjetaPerfil = document.createElement("aside");
  tarjetaPerfil.classList.add("tarjeta");
  const tituloPerfil = document.createElement("h2");
  tituloPerfil.classList.add("titulo-seccion");
  tituloPerfil.textContent = "Mi Perfil";
  const imagenPerfil = document.createElement("img");
  imagenPerfil.src = "./src/assets/img/logo-lingo.svg";
  imagenPerfil.classList.add("imagen-perfil");
  imagenPerfil.alt = "Mi imagen de perfil";
  const nombrePerfil = document.createElement("p");
  nombrePerfil.classList.add("nombre-perfil");
  const textoNombre = document.createElement("span");
  textoNombre.id = "perfil-nombre-span";
  textoNombre.textContent = datosUsuario.nombre;
  const apodo = document.createElement("span");
  apodo.classList.add("usuario-perfil");
  apodo.textContent = `@${datosUsuario.nombre.toLowerCase()}_web`;
  nombrePerfil.appendChild(textoNombre);
  nombrePerfil.appendChild(apodo);
  const insigniaAntiguedad = document.createElement("p");
  insigniaAntiguedad.classList.add("tarjeta-badges", "antig");
  insigniaAntiguedad.textContent = "📅 Miembro desde Marzo de 2025";
  const insigniaNivel = document.createElement("p");
  insigniaNivel.classList.add("tarjeta-badges", "nivel");
  insigniaNivel.textContent = "🏆 Nivel 4 - Aprendiz";
  tarjetaPerfil.appendChild(tituloPerfil);
  tarjetaPerfil.appendChild(imagenPerfil);
  tarjetaPerfil.appendChild(nombrePerfil);
  tarjetaPerfil.appendChild(insigniaAntiguedad);
  tarjetaPerfil.appendChild(insigniaNivel);

  const seccionCuenta = document.createElement("section");
  seccionCuenta.classList.add("config-cuenta");
  const tituloCuenta = document.createElement("h2");
  tituloCuenta.classList.add("titulo-seccion");
  tituloCuenta.textContent = "Configuración de cuenta";
  const formulario = document.createElement("form");
  formulario.classList.add("form-perfil");
  formulario.id = "form-perfil-config";

  const contenedorEmail = document.createElement("div");
  const etiquetaEmail = document.createElement("label");
  etiquetaEmail.htmlFor = "email";
  etiquetaEmail.textContent = "📧 Email Registrado";
  const campoEmail = document.createElement("input");
  campoEmail.type = "email";
  campoEmail.name = "email";
  campoEmail.id = "email";
  campoEmail.value = datosUsuario.email || "";
  contenedorEmail.appendChild(etiquetaEmail);
  contenedorEmail.appendChild(campoEmail);

  const contenedorContrasenia = document.createElement("div");
  contenedorContrasenia.classList.add("contrasenia");
  const etiquetaContrasenia = document.createElement("label");
  etiquetaContrasenia.htmlFor = "contrasenia";
  etiquetaContrasenia.textContent = "🔒 Contraseña";
  const controlesContrasenia = document.createElement("div");
  controlesContrasenia.classList.add("contrasenia-input");
  const campoContrasenia = document.createElement("input");
  campoContrasenia.type = "password";
  campoContrasenia.name = "contrasenia";
  campoContrasenia.id = "contrasenia";
  campoContrasenia.value = "";
  campoContrasenia.disabled = true;
  const botonRecuperacion = document.createElement("button");
  botonRecuperacion.type = "button";
  botonRecuperacion.id = "btn-ir-recuperar";
  botonRecuperacion.classList.add("btn", "btn-nav");
  botonRecuperacion.textContent = "🔑 Cambiar Contraseña";
  controlesContrasenia.appendChild(campoContrasenia);
  controlesContrasenia.appendChild(botonRecuperacion);
  contenedorContrasenia.appendChild(etiquetaContrasenia);
  contenedorContrasenia.appendChild(controlesContrasenia);

  const contenedorIdioma = document.createElement("div");
  const etiquetaIdioma = document.createElement("label");
  etiquetaIdioma.htmlFor = "idioma";
  etiquetaIdioma.textContent = "🌐 Idioma de la Interfaz";
  const selectorIdioma = document.createElement("select");
  selectorIdioma.name = "idioma";
  selectorIdioma.id = "idioma";
  const idiomas = [
    { valor: "al", etiqueta: "Alemán" },
    { valor: "ch", etiqueta: "Chino" },
    { valor: "es", etiqueta: "Español" },
    { valor: "en", etiqueta: "Inglés" },
  ];
  idiomas.forEach((idioma) => {
    const opcion = document.createElement("option");
    opcion.value = idioma.valor;
    opcion.textContent = idioma.etiqueta;
    opcion.selected =
      datosUsuario.idiomaInterfaz === idioma.valor ||
      (idioma.valor === "es" &&
        (!datosUsuario.idiomaInterfaz || datosUsuario.idiomaInterfaz === "es"));
    selectorIdioma.appendChild(opcion);
  });
  contenedorIdioma.appendChild(etiquetaIdioma);
  contenedorIdioma.appendChild(selectorIdioma);

  const mensaje = document.createElement("p");
  mensaje.id = "perfil-msg";
  mensaje.classList.add("message");
  mensaje.style.fontSize = "0.9rem";
  mensaje.style.marginTop = "10px";

  const botones = document.createElement("div");
  botones.classList.add("btn-wrapper-form");
  const botonCerrarSesion = document.createElement("button");
  botonCerrarSesion.type = "button";
  botonCerrarSesion.id = "btn-cerrar-sesion";
  botonCerrarSesion.classList.add("btn", "btn-rojo");
  botonCerrarSesion.textContent = "Cerrar Sesión";
  const botonGuardar = document.createElement("button");
  botonGuardar.type = "submit";
  botonGuardar.classList.add("btn", "btn-verde");
  botonGuardar.textContent = "Guardar Cambios";
  botones.appendChild(botonCerrarSesion);
  botones.appendChild(botonGuardar);

  formulario.appendChild(contenedorEmail);
  formulario.appendChild(contenedorContrasenia);
  formulario.appendChild(contenedorIdioma);
  formulario.appendChild(mensaje);
  formulario.appendChild(botones);
  seccionCuenta.appendChild(tituloCuenta);
  seccionCuenta.appendChild(formulario);
  contenedor.appendChild(tarjetaPerfil);
  contenedor.appendChild(seccionCuenta);

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const resultado = actualizarUsuario(datosUsuario.nombre, {
      email: campoEmail.value.trim(),
      idiomaInterfaz: selectorIdioma.value,
    });
    mensaje.style.color = resultado.exitoso ? "green" : "red";
    mensaje.textContent = resultado.mensaje;
    setTimeout(() => {
      mensaje.textContent = "";
    }, 3000);
  });

  botonRecuperacion.addEventListener("click", () => {
    sessionStorage.setItem("vistaOrigen", "perfil");
    window.location.hash = "#recuperar";
  });

  botonCerrarSesion.addEventListener("click", () => {
    if (window.confirm("¿Estás seguro de que deseas cerrar sesión?")) {
      cerrarSesion();
    }
  });

  fragmento.appendChild(contenedor);
  return fragmento;
}
