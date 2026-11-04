import { iniciarSesion } from "../../services/login.service.js";

export function viewLogin() {
  const fragmento = document.createDocumentFragment();
  // 🛠️ CORRECCIÓN: Construye la vista con nodos DOM para no interpretar contenido como HTML.

  const form = document.createElement("form");
  form.classList.add("login-form");
  const contenedorCampos = document.createElement("section");
  contenedorCampos.classList.add("login-input-container");
  const etiquetaUsuario = document.createElement("label");
  etiquetaUsuario.htmlFor = "usuario";
  etiquetaUsuario.textContent = "Usuario / Email";
  const campoUsuario = document.createElement("input");
  campoUsuario.type = "text";
  campoUsuario.name = "usuario";
  campoUsuario.id = "usuario";
  campoUsuario.required = true;
  campoUsuario.autocomplete = "username";

  const etiquetaContrasenia = document.createElement("label");
  etiquetaContrasenia.htmlFor = "contrasenia";
  etiquetaContrasenia.textContent = "Contraseña";
  const campoContrasenia = document.createElement("input");
  campoContrasenia.type = "password";
  campoContrasenia.name = "contrasenia";
  campoContrasenia.id = "contrasenia";
  campoContrasenia.required = true;
  campoContrasenia.autocomplete = "current-password";
  contenedorCampos.appendChild(etiquetaUsuario);
  contenedorCampos.appendChild(campoUsuario);
  contenedorCampos.appendChild(etiquetaContrasenia);
  contenedorCampos.appendChild(campoContrasenia);

  const contenedorError = document.createElement("p");
  contenedorError.id = "login-error";
  contenedorError.classList.add("error-message");
  contenedorError.style.color = "red";
  contenedorError.style.fontSize = "0.9rem";
  contenedorError.style.marginBottom = "10px";

  const botonEnviar = document.createElement("button");
  botonEnviar.classList.add("btn", "btn-verde");
  botonEnviar.type = "submit";
  botonEnviar.textContent = "Iniciar sesión";

  const enlaces = document.createElement("section");
  enlaces.classList.add("login-links");
  const enlaceRecuperacion = document.createElement("a");
  enlaceRecuperacion.href = "#recuperar";
  enlaceRecuperacion.textContent = "¿Olvidaste tu contraseña?";
  const separador = document.createElement("span");
  separador.textContent = "|";
  const enlaceRegistro = document.createElement("a");
  enlaceRegistro.href = "#registrar";
  enlaceRegistro.textContent = "¿No tienes cuenta? Créala aquí";
  enlaces.appendChild(enlaceRecuperacion);
  enlaces.appendChild(separador);
  enlaces.appendChild(enlaceRegistro);

  form.appendChild(contenedorCampos);
  form.appendChild(contenedorError);
  form.appendChild(botonEnviar);
  form.appendChild(enlaces);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const resultado = iniciarSesion(
      campoUsuario.value.trim(),
      campoContrasenia.value,
    );
    if (resultado.exitoso) {
      window.location.hash = "#dashboard";
    } else {
      contenedorError.textContent = resultado.mensaje;
    }
  });

  fragmento.appendChild(form);
  return fragmento;
}
