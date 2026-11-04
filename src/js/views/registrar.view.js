import { registrarUsuario } from "../../services/login.service.js";

export function viewRegistrar() {
  const fragmento = document.createDocumentFragment();

  const form = document.createElement("form");
  form.classList.add("login-form");
  const titulo = document.createElement("h2");
  titulo.textContent = "Crear Cuenta";

  const contenedorCampos = document.createElement("section");
  contenedorCampos.classList.add("login-input-container");
  const etiquetaUsuario = document.createElement("label");
  etiquetaUsuario.htmlFor = "nombre";
  etiquetaUsuario.textContent = "Usuario";
  const campoUsuario = document.createElement("input");
  campoUsuario.type = "text";
  campoUsuario.name = "nombre";
  campoUsuario.id = "nombre";
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
  campoContrasenia.autocomplete = "new-password";
  contenedorCampos.appendChild(etiquetaUsuario);
  contenedorCampos.appendChild(campoUsuario);
  contenedorCampos.appendChild(etiquetaContrasenia);
  contenedorCampos.appendChild(campoContrasenia);

  const mensaje = document.createElement("p");
  mensaje.id = "register-msg";
  mensaje.classList.add("message");
  mensaje.style.fontSize = "0.9rem";
  mensaje.style.marginBottom = "10px";

  const botonEnviar = document.createElement("button");
  botonEnviar.classList.add("btn", "btn-verde");
  botonEnviar.type = "submit";
  botonEnviar.textContent = "Registrarse";

  const enlaces = document.createElement("section");
  enlaces.classList.add("login-links");
  const enlaceInicioSesion = document.createElement("a");
  enlaceInicioSesion.href = "#login";
  enlaceInicioSesion.textContent = "¿Ya tienes cuenta? Inicia sesión";
  enlaces.appendChild(enlaceInicioSesion);

  form.appendChild(titulo);
  form.appendChild(contenedorCampos);
  form.appendChild(mensaje);
  form.appendChild(botonEnviar);
  form.appendChild(enlaces);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const resultado = registrarUsuario(
      campoUsuario.value.trim(),
      campoContrasenia.value,
    );
    mensaje.style.color = resultado.exitoso ? "green" : "red";
    mensaje.textContent = resultado.mensaje;

    if (resultado.exitoso) {
      setTimeout(() => {
        if (window.location.hash === "#registrar") {
          window.location.hash = "#login";
        }
      }, 1500);
    }
  });

  fragmento.appendChild(form);
  return fragmento;
}
