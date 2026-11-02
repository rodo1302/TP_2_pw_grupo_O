export const navbar = (tipo) => {
  const headerTipo = document.querySelector(`header`);

  if (!headerTipo) {
    console.error("No se encontró ningún elemento <header> en el HTML.");
    return;
  }

  headerTipo.replaceChildren();

  switch (tipo) {
    case "home":
      headerTipo.appendChild(navbarHome());
      break;
    case "main":
      headerTipo.appendChild(navbarMain());
      break;
    case "cursos":
      headerTipo.appendChild(navbarCursos());
      break;
    default:
      console.warn(`No se encontró un navbar para el tipo "${tipo}".`);
  }

  function navbarHome() {
    const fragmento = document.createDocumentFragment();

    const logoLink = document.createElement("a");
    logoLink.href = "#cursos";
    logoLink.classList.add("logo-marca");

    const logoImg = document.createElement("img");
    logoImg.src = "./src/assets/img/logo-lingo.svg";
    logoImg.alt = "Lingo Panda";
    logoImg.classList.add("img-logo");

    fragmento.append(logoLink, logoImg);

    return fragmento;
  }

  function navbarMain() {
    const fragmento = document.createDocumentFragment();

    const logoLink = document.createElement("a");
    logoLink.href = "#cursos";
    logoLink.classList.add("logo-marca");

    const logoImg = document.createElement("img");
    logoImg.src = "./src/assets/img/logo-lingo.svg";
    logoImg.alt = "Lingo Panda";
    logoImg.classList.add("img-logo");

    const logoSpan = document.createElement("span");
    logoSpan.classList.add("nombre-brand");
    logoSpan.textContent = "LingoPanda";
    logoLink.append(logoImg, logoSpan);

    const nav = document.createElement("nav");
    nav.classList.add("contenedor-nav");
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-enlaces");

    const navItems = [
      { label: "Curso", hash: "#cursos", active: true },
      { label: "Perfil", hash: "#perfil", active: false },
      { label: "Clasificación", hash: "#clasificacion", active: false },
    ];

    navItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.hash;
      a.textContent = item.label;
      a.classList.add("btn", "btn-nav");
      if (item.active) {
        a.classList.add("activo");
      }
      li.appendChild(a);
      menuList.appendChild(li);
    });
    nav.appendChild(menuList);

    const logoutBtn = document.createElement("a");
    logoutBtn.href = "#login";
    logoutBtn.classList.add("btn", "btn-rojo");

    const logoutImg = document.createElement("img");
    logoutImg.src = "./src/assets/img/cerrar-sesion.svg";
    logoutImg.alt = "Salir";
    logoutImg.classList.add("img-icono-salir");
    logoutBtn.appendChild(logoutImg);

    const aside = document.createElement("aside");
    aside.classList.add("indicadores-header");

    const rachaP = document.createElement("p");
    rachaP.classList.add("stat-item", "racha");
    rachaP.innerHTML =
      '🔥 <strong>5 dias</strong> <span class="separador">|</span>';

    const xpP = document.createElement("p");
    xpP.classList.add("stat-item", "xp");
    xpP.innerHTML = "💎 <strong>1200 XP</strong>";

    aside.append(rachaP, xpP);

    fragmento.append(logoLink, nav, logoutBtn, aside);

    return fragmento;
  }
};
