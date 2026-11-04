export function viewHome() {
  const fragmento = document.createDocumentFragment();
  // 🛠️ CORRECCIÓN: Construye la vista con nodos DOM para no interpretar contenido como HTML.

  const portada = document.createElement("section");
  portada.classList.add("hero");
  const textoPortada = document.createElement("div");
  textoPortada.classList.add("hero__copy");

  const etiquetaPortada = document.createElement("p");
  etiquetaPortada.classList.add("eyebrow");
  etiquetaPortada.textContent = "Aprender idiomas, sin presión";
  const tituloPortada = document.createElement("h1");
  tituloPortada.textContent =
    "Tu camino hacia hablar con confianza empieza aquí.";
  const descripcionPortada = document.createElement("p");
  descripcionPortada.classList.add("hero__text");
  descripcionPortada.textContent =
    "Lecciones breves, desafíos diarios y un progreso que se siente real. Domina inglés, alemán o chino con una experiencia divertida, clara y efectiva.";
  const accionesPortada = document.createElement("div");
  accionesPortada.classList.add("hero__actions");
  const enlaceInicioSesion = document.createElement("a");
  enlaceInicioSesion.href = "#login";
  enlaceInicioSesion.classList.add("btn", "btn-verde");
  enlaceInicioSesion.textContent = "¡Comenzar ahora!";
  const enlaceTestimonios = document.createElement("a");
  enlaceTestimonios.href = "#testimonios";
  enlaceTestimonios.classList.add("btn", "btn-rojo");
  enlaceTestimonios.textContent = "Ver opiniones";
  accionesPortada.appendChild(enlaceInicioSesion);
  accionesPortada.appendChild(enlaceTestimonios);
  textoPortada.appendChild(etiquetaPortada);
  textoPortada.appendChild(tituloPortada);
  textoPortada.appendChild(descripcionPortada);
  textoPortada.appendChild(accionesPortada);

  const imagenPortada = document.createElement("div");
  imagenPortada.classList.add("hero__visual");
  const mascota = document.createElement("img");
  mascota.src = "./src/assets/img/logo-lingo.svg";
  mascota.alt = "Mascota de LingoPanda";
  mascota.classList.add("mascot-image");
  imagenPortada.appendChild(mascota);
  portada.appendChild(textoPortada);
  portada.appendChild(imagenPortada);
  fragmento.appendChild(portada);

  const seccionTestimonios = document.createElement("section");
  seccionTestimonios.id = "testimonios";
  seccionTestimonios.classList.add("panel-section");
  const encabezadoTestimonios = document.createElement("div");
  encabezadoTestimonios.classList.add("section-heading");
  const etiquetaSocial = document.createElement("p");
  etiquetaSocial.classList.add("eyebrow");
  etiquetaSocial.textContent = "Prueba social";
  const tituloSocial = document.createElement("h2");
  tituloSocial.textContent = "Más de 30.000 estudiantes ya están aprendiendo";
  encabezadoTestimonios.appendChild(etiquetaSocial);
  encabezadoTestimonios.appendChild(tituloSocial);

  const grillaTestimonios = document.createElement("div");
  grillaTestimonios.classList.add("testimonials-grid");
  const testimonios = [
    {
      comentario:
        "“La experiencia es súper clara y motivadora. He avanzado muchísimo en inglés en solo unas semanas.”",
      nombre: "María S.",
      curso: "Estudiante de inglés",
    },
    {
      comentario:
        "“Me encanta la estructura de las lecciones. Puedo estudiar en cualquier momento sin sentir que es pesado.”",
      nombre: "Lucas R.",
      curso: "Aprendiz de alemán",
    },
    {
      comentario:
        "“El enfoque de retos diarios me ayuda a mantener constancia. La motivación está siempre presente.”",
      nombre: "Yuna C.",
      curso: "Estudiante de chino",
    },
  ];

  testimonios.forEach((testimonio) => {
    const tarjetaTestimonio = document.createElement("article");
    tarjetaTestimonio.classList.add("testimonial-card");
    const estrellas = document.createElement("div");
    estrellas.classList.add("stars");
    estrellas.setAttribute("aria-label", "Cinco estrellas");
    estrellas.textContent = "★★★★★";
    const comentario = document.createElement("p");
    comentario.textContent = testimonio.comentario;
    const persona = document.createElement("div");
    persona.classList.add("person");
    const nombre = document.createElement("strong");
    nombre.textContent = testimonio.nombre;
    const descripcionCurso = document.createElement("span");
    descripcionCurso.textContent = testimonio.curso;
    persona.appendChild(nombre);
    persona.appendChild(descripcionCurso);
    tarjetaTestimonio.appendChild(estrellas);
    tarjetaTestimonio.appendChild(comentario);
    tarjetaTestimonio.appendChild(persona);
    grillaTestimonios.appendChild(tarjetaTestimonio);
  });
  seccionTestimonios.appendChild(encabezadoTestimonios);
  seccionTestimonios.appendChild(grillaTestimonios);
  fragmento.appendChild(seccionTestimonios);

  const llamadoAccion = document.createElement("section");
  llamadoAccion.classList.add("cta-band");
  const textoLlamadoAccion = document.createElement("div");
  const etiquetaLlamadoAccion = document.createElement("p");
  etiquetaLlamadoAccion.classList.add("eyebrow");
  etiquetaLlamadoAccion.textContent = "Tu idioma te espera";
  const tituloLlamadoAccion = document.createElement("h2");
  tituloLlamadoAccion.textContent =
    "Comienza hoy y construye tu próxima habilidad.";
  textoLlamadoAccion.appendChild(etiquetaLlamadoAccion);
  textoLlamadoAccion.appendChild(tituloLlamadoAccion);
  const enlaceRegistro = document.createElement("a");
  enlaceRegistro.href = "#registrar";
  enlaceRegistro.classList.add("btn", "btn-verde");
  enlaceRegistro.textContent = "Inscribirme gratis";
  llamadoAccion.appendChild(textoLlamadoAccion);
  llamadoAccion.appendChild(enlaceRegistro);
  fragmento.appendChild(llamadoAccion);

  return fragmento;
}
