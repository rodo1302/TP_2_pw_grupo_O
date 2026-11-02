export const footer = (tipo) => {
  const footerTipo = document.querySelector(`#footer-container`);

  if (!footerTipo) {
    console.error("No se encontró ningún elemento <footer> en el HTML.");
    return;
  }

  footerTipo.replaceChildren();

  switch (tipo) {
    case "home":
      footerTipo.appendChild(footerHome());
      break;
    case "main":
      footerTipo.appendChild(footerMain());
      break;
    case "cursos":
      footerTipo.appendChild(footerCursos());
      break;
    default:
      console.warn(`No se encontró un footer para el tipo "${tipo}".`);
  }

  function footerHome() {
    const fragmento = document.createDocumentFragment();

    const small = document.createElement("small");
    small.classList.add("copyright-footer");
    small.textContent = "© 2026 LingoPanda. Todos los derechos reservados.";

    fragmento.append(small);

    return fragmento;
  }
};
