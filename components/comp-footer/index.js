function compFooter(container) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `<div class="footer-container">
      <span class="footer__title">Pablo</span>
      <div class="footer__redes">
        <div class="footer__redes-fonts">
        <a class="footer__redes-link" href="https://www.instagram.com/pablomartinsdemaltoz/?hl=es-la">instagram</a>
        <img class="footer__redes-logos" src="../images/instagram.png" alt="" />
        </div>

        <div class="footer__redes-fonts">
          <a class="footer__redes-link" href="https://www.linkedin.com/in/pablo-martins-de-maltoz-78254142/">Linkedin</a>
          <img class="footer__redes-logos" src="../images/linkedin.png" alt="" />
        </div>

        <div class="footer__redes-fonts">
         <a class="footer__redes-link" href="https://github.com/PabloMartinsDeMaltoz"> Githube </a>
          <img class="footer__redes-logos" src="../images/github.png" alt="" />
        </div>
      </div>
    </div>
   `;
  container.appendChild(footerEl);
}
