export const view = (tipo) => {
  let css = document.querySelector("#viewStyles");
  if (!css) {
    css = document.createElement("link");
    css.id = "viewStyles";
    css.rel = "stylesheet";
  }

  const viewTipo = document.querySelector(`#app`);

  if (!viewTipo) {
    console.error("No se encontró ningún elemento <main> en el HTML.");
  }

  viewTipo.replaceChildren();

  switch (tipo) {
    case "home":
      css.href = "./src/assets/css/viewhome/view.css";
      viewTipo.appendChild(viewHome());
      break;
    case "login":
      viewTipo.appendChild(viewLogin());
      break;
    case "cursos":
      viewTipo.appendChild(viewCursos());
      break;
    default:
      console.warn(`No se encontró un main para el tipo "${tipo}".`);
  }

  function viewHome() {
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "./src/assets/css/viewhome/view.css";
    document.head.appendChild(cssLink);

    viewTipo.classList.add("home-page");

    const fragmento = document.createDocumentFragment();

    const temp = document.createElement("div");

    temp.innerHTML = `
          <section class="hero">
        <div class="hero__copy">
          <p class="eyebrow">Aprender idiomas, sin presión</p>
          <h1>Tu camino hacia hablar con confianza empieza aquí.</h1>
          <p class="hero__text">
            Lecciones breves, desafíos diarios y un progreso que se siente real.
            Domina inglés, alemán o chino con una experiencia divertida, clara y efectiva.
          </p>

          <div class="hero__actions">
            <a href="./login/index.html" class="btn btn-verde">¡Comenzar ahora!</a>
            <a href="#testimonios" class="btn btn-rojo">Ver opiniones</a>
          </div>
        </div>

        <div class="hero__visual">
          <img src="./img/logo-lingo.svg" alt="Mascota de LingoPanda" class="mascot-image" />
        </div>
      </section>

      <section id="testimonios" class="panel-section">
        <div class="section-heading">
          <p class="eyebrow">Prueba social</p>
          <h2>Más de 30.000 estudiantes ya están aprendiendo</h2>
        </div>

        <div class="testimonials-grid">
          <article class="testimonial-card">
            <div class="stars" aria-label="Cinco estrellas">★★★★★</div>
            <p>
              “La experiencia es súper clara y motivadora. He avanzado muchísimo
              en inglés en solo unas semanas.”
            </p>
            <div class="person">
              <strong>María S.</strong>
              <span>Estudiante de inglés</span>
            </div>
          </article>

          <article class="testimonial-card">
            <div class="stars" aria-label="Cinco estrellas">★★★★★</div>
            <p>
              “Me encanta la estructura de las lecciones. Puedo estudiar en
              cualquier momento sin sentir que es pesado.”
            </p>
            <div class="person">
              <strong>Lucas R.</strong>
              <span>Aprendiz de alemán</span>
            </div>
          </article>

          <article class="testimonial-card">
            <div class="stars" aria-label="Cinco estrellas">★★★★★</div>
            <p>
              “El enfoque de retos diarios me ayuda a mantener constancia. La
              motivación está siempre presente.”
            </p>
            <div class="person">
              <strong>Yuna C.</strong>
              <span>Estudiante de chino</span>
            </div>
          </article>
        </div>
      </section>

      <section class="cta-band">
        <div>
          <p class="eyebrow">Tu idioma te espera</p>
          <h2>Comienza hoy y construye tu próxima habilidad.</h2>
        </div>
        <a href="./registrar/index.html" class="btn btn-verde">Inscribirme gratis</a>
      </section>
          `;
    while (temp.firstChild) {
      fragmento.appendChild(temp.firstChild);
    }
    return fragmento;
  }

  function viewLogin() {}
  document.head.appendChild(css);
};
