export const footer = (tipo) => {
  const footerTipo = document.querySelector(`#footer-container`);

  if (!footerTipo) {
    console.error("No se encontró ningún elemento <footer> en el HTML.");
    return;
  }

  footerTipo.replaceChildren();

  const supportedRoutes = [
    "home",
    "dashboard",
    "cursos",
    "perfil",
    "clasificacion",
    "unidades",
    "leccion-interactiva",
    "login",
    "registrar",
    "recuperar",
    "contacto",
    "mensaje",
  ];
  if (!supportedRoutes.includes(tipo)) {
    console.warn(`No se encontró un footer para el tipo "${tipo}".`);
    return;
  }

  const dashboardRoutes = [
    "dashboard",
    "cursos",
    "perfil",
    "clasificacion",
    "unidades",
    "leccion-interactiva",
    "contacto",
    "mensaje",
  ];

  footerTipo.appendChild(
    dashboardRoutes.includes(tipo) ? footerDashboard() : footerHome(),
  );

  function footerHome() {
    const fragmento = document.createDocumentFragment();

    const small = document.createElement("small");
    small.classList.add("copyright-footer");
    small.textContent = "© 2026 LingoPanda. Todos los derechos reservados.";

    fragmento.append(small);

    return fragmento;
  }

  function footerDashboard() {
    const fragmento = document.createDocumentFragment();
    const marca = document.createElement("p");
    marca.classList.add("marca-footer");

    const logo = document.createElement("strong");
    logo.classList.add("logo-footer");
    logo.textContent = "🐼 LingoPanda";

    const slogan = document.createElement("span");
    slogan.textContent = "Aprender idiomas nunca fue tan divertido.";
    marca.append(logo, slogan);

    const nav = document.createElement("nav");
    nav.classList.add("links-footer");
    const contactoLink = document.createElement("a");
    contactoLink.href = "#contacto";
    contactoLink.textContent = "Contactanos";
    nav.appendChild(contactoLink);

    const copyright = document.createElement("small");
    copyright.classList.add("copyright-footer");
    copyright.textContent = "© 2026 LingoPanda. Todos los derechos reservados.";

    fragmento.append(marca, nav, copyright);
    return fragmento;
  }
};
