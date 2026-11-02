export const navbar = (tipo) => {
  const headerTipo = document.querySelector(`header`);

  if (!headerTipo) {
    console.error("No se encontró ningún elemento <header> en el HTML.");
    return;
  }

  headerTipo.replaceChildren();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  switch (tipo) {
    case "home":
      headerTipo.appendChild(navbarHome());
      break;
    case "dashboard":
      headerTipo.appendChild(navbarMain(currentUser));
      break;
    case "cursos":
      headerTipo.appendChild(navbarCursos(currentUser));
      break;
    case "perfil":
      headerTipo.appendChild(navbarPerfil(currentUser));
      break;
    default:
      console.warn(`No se encontró un navbar para el tipo "${tipo}".`);
  }

  function navbarHome() {
    const fragmento = document.createDocumentFragment();

    const logoLink = document.createElement("a");
    logoLink.href = "#home";
    logoLink.classList.add("logo-marca");

    const logoImg = document.createElement("img");
    logoImg.src = "./src/assets/img/logo-lingo.svg";
    logoImg.alt = "Lingo Panda";
    logoImg.classList.add("img-logo");

    const logoSpan = document.createElement("span");
    logoSpan.classList.add("nombre-brand");
    logoSpan.textContent = "LingoPanda";
    logoLink.append(logoImg, logoSpan);

    fragmento.append(logoLink);

    return fragmento;
  }

  function navbarDashboard() {
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

    const logoutBtn = document.createElement("button");
    logoutBtn.classList.add("btn", "btn-rojo");
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
      window.location.hash = "#home";
    });

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
