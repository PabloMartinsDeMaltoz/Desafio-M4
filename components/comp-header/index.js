function compHeader(container) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<header class="header">
      <span class="header__logo"><a class="header__logo-link" href="./index.html">Pablo</a></span>
      <div class="header__menu">
        <div class="header__menu-logo"></div>
        <div class="header__menu-logo"></div>
        <div class="header__menu-logo"></div>
      </div>
      <div class="header__menu-desktop">
        <a class="header__menu-desktop--links" href="./porfolio.html">Portfolio</a>
        <a class="header__menu-desktop--links" href="./servicios.html">Servicios</a>
        <a class="header__menu-desktop--links" href="./contacto.html">Contacto</a>
      </div>
    </header>
    <div class="header__menu-mobile-container">
      <div class="header__menu-mobile">
        <img class="header__menu-mobile-exit" src="./images/x.svg" alt="" />
        <a class="header__menu-mobile--links" href="./porfolio.html">Portfolio</a>
        <a class="header__menu-mobile--links" href="./servicios.html">Servicios</a>
        <a class="header__menu-mobile--links" href="./contacto.html">Contacto</a>
      </div>
    </div>
    <section class="home"></section>`;
  const exitMobileMenuEl = headerEl.querySelector(".header__menu-mobile-exit ");
  const openMobileMenuEl = headerEl.querySelector(".header__menu");
  const menuMobileEl = headerEl.querySelector(".header__menu-mobile-container");

  openMobileMenuEl.addEventListener("click", () => {
    menuMobileEl.style = "display:initial";
  });
  exitMobileMenuEl.addEventListener("click", () => {
    menuMobileEl.style = "display:none";
  });
  container.appendChild(headerEl);
}
