import { recuperarContrasenia } from "../../services/login.service.js";

const vistaOrigen = sessionStorage.getItem("vistaOrigen");

export function viewRecuperar() {
  const fragmento = document.createDocumentFragment();
  // 🛠️ CORRECCIÓN: Construye la vista con nodos DOM para no interpretar contenido como HTML.

  const form = document.createElement("form");
  form.classList.add("login-form", "recover-form");
  const titulo = document.createElement("h2");
  titulo.textContent = "Restablecer Contraseña";

  const contenedorCampos = document.createElement("section");
  contenedorCampos.classList.add("login-input-container");
  const etiquetaUsuario = document.createElement("label");
  etiquetaUsuario.htmlFor = "usuario-recuperar";
  etiquetaUsuario.textContent = "Nombre de usuario";
  const campoUsuario = document.createElement("input");
  campoUsuario.type = "text";
  campoUsuario.name = "usuario";
  campoUsuario.id = "usuario-recuperar";
  campoUsuario.required = true;
  campoUsuario.autocomplete = "username";

  const etiquetaContrasenia = document.createElement("label");
  etiquetaContrasenia.htmlFor = "nueva-contrasenia";
  etiquetaContrasenia.textContent = "Nueva contraseña";
  const campoContrasenia = document.createElement("input");
  campoContrasenia.type = "password";
  campoContrasenia.name = "nuevaContrasenia";
  campoContrasenia.id = "nueva-contrasenia";
  campoContrasenia.required = true;
  campoContrasenia.autocomplete = "new-password";
  contenedorCampos.appendChild(etiquetaUsuario);
  contenedorCampos.appendChild(campoUsuario);
  contenedorCampos.appendChild(etiquetaContrasenia);
  contenedorCampos.appendChild(campoContrasenia);

  const mensaje = document.createElement("p");
  mensaje.id = "recover-msg";
  mensaje.classList.add("message");
  mensaje.style.fontSize = "0.9rem";
  mensaje.style.marginBottom = "10px";

  const botonEnviar = document.createElement("button");
  botonEnviar.classList.add("btn", "btn-verde");
  botonEnviar.type = "submit";
  botonEnviar.textContent = "Actualizar contraseña";

  const enlaces = document.createElement("section");
  enlaces.classList.add("login-links");
  const enlaceInicioSesion = document.createElement("a");
  if (vistaOrigen === "perfil") {
    enlaceInicioSesion.href = "#perfil";
    enlaceInicioSesion.textContent = "Volver al perfil";
  } else {
    enlaceInicioSesion.textContent = "Volver al inicio de sesión";
    enlaceInicioSesion.href = "#login";
  }
  enlaces.appendChild(enlaceInicioSesion);

  form.appendChild(titulo);
  form.appendChild(contenedorCampos);
  form.appendChild(mensaje);
  form.appendChild(botonEnviar);
  form.appendChild(enlaces);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const resultado = recuperarContrasenia(
      campoUsuario.value.trim(),
      campoContrasenia.value,
    );
    mensaje.style.color = resultado.exitoso ? "green" : "red";
    mensaje.textContent = resultado.mensaje;

    if (resultado.exitoso) {
      setTimeout(() => {
        if (window.location.hash === "#recuperar") {
          if (vistaOrigen === "perfil") {
            window.location.hash = "#perfil";
          } else {
            window.location.hash = "#login";
          }
        }
      }, 1500);
    }
  });

  fragmento.appendChild(form);
  return fragmento;
}
