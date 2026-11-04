export function viewContacto() {
  const fragmento = document.createDocumentFragment();
  // 🛠️ CORRECCIÓN: Construye la vista con nodos DOM para no interpretar contenido como HTML.
  const contenedor = document.createElement("section");
  contenedor.classList.add("formulario");

  const formulario = document.createElement("form");
  formulario.action = "#mensaje";
  formulario.method = "GET";

  const nombreLabel = document.createElement("label");
  nombreLabel.htmlFor = "nombre";
  nombreLabel.textContent = "Nombre:";
  const nombreInput = document.createElement("input");
  nombreInput.type = "text";
  nombreInput.id = "nombre";
  nombreInput.name = "nombre";
  nombreInput.required = true;

  const apellidoLabel = document.createElement("label");
  apellidoLabel.htmlFor = "apellido";
  apellidoLabel.textContent = "Apellido:";
  const apellidoInput = document.createElement("input");
  apellidoInput.type = "text";
  apellidoInput.id = "apellido";
  apellidoInput.name = "apellido";
  apellidoInput.required = true;

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.textContent = "e-mail:";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";

  const etiquetaMensaje = document.createElement("label");
  etiquetaMensaje.htmlFor = "mensaje-texto";
  etiquetaMensaje.textContent = "Mensaje:";
  const campoMensaje = document.createElement("textarea");
  campoMensaje.name = "mensaje-texto";
  campoMensaje.id = "mensaje-texto";
  campoMensaje.placeholder = "Escriba su mensaje ...";
  campoMensaje.required = true;

  const botones = document.createElement("div");
  botones.classList.add("botones");
  const botonEnviar = document.createElement("button");
  botonEnviar.type = "submit";
  botonEnviar.classList.add("btn", "btn-verde", "btn-enviar");
  botonEnviar.textContent = "Enviar";
  const enlaceCancelar = document.createElement("a");
  enlaceCancelar.href = "#dashboard";
  enlaceCancelar.classList.add("btn", "btn-rojo", "btn-cancelar");
  enlaceCancelar.textContent = "Cancelar";
  botones.appendChild(botonEnviar);
  botones.appendChild(enlaceCancelar);

  formulario.appendChild(nombreLabel);
  formulario.appendChild(nombreInput);
  formulario.appendChild(apellidoLabel);
  formulario.appendChild(apellidoInput);
  formulario.appendChild(etiquetaMensaje);
  formulario.appendChild(campoMensaje);
  formulario.appendChild(botones);
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.hash = "#mensaje";
  });

  const modal = document.createElement("div");
  modal.id = "mensaje";
  modal.classList.add("vista-mensaje");
  modal.setAttribute("role", "status");
  modal.setAttribute("aria-live", "polite");
  if (window.location.hash === "#mensaje") {
    modal.classList.add("mostrar");
  }

  const modalCard = document.createElement("div");
  modalCard.classList.add("tarjeta-mensaje");
  const modalTitle = document.createElement("h2");
  modalTitle.textContent = "¡Gracias por escribirnos!";
  const modalText = document.createElement("p");
  modalText.textContent =
    "Tu mensaje quedó preparado. Esta demostración no lo envía a un servidor.";
  const backLink = document.createElement("a");
  backLink.href = "#contacto";
  backLink.classList.add("btn", "btn-verde");
  backLink.textContent = "Volver al contacto";
  modalCard.appendChild(modalTitle);
  modalCard.appendChild(modalText);
  modalCard.appendChild(backLink);
  modal.appendChild(modalCard);

  contenedor.appendChild(formulario);
  contenedor.appendChild(modal);
  fragmento.appendChild(contenedor);
  return fragmento;
}
