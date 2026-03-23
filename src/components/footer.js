const footerNavList = [
  {
    titleList: "Tienda",
    items: [
      "Los Más Vendidos",
      "Novedades",
      "Tamaño de Viaje",
      "Sets de Regalo",
    ],
  },
  {
    titleList: "Preocupaciones",
    items: ["Anti-Edad", "Hidratación", "Sensibilidad", "Protección Solar"],
  },
  {
    titleList: "Empresa",
    items: ["Nuestra Historia", "Ingredientes", "Sostenibilidad", "Diario"],
  },
  {
    titleList: "Soporte",
    items: ["Contacto", "Envíos y Devoluciones", "FAQ", "Distribuidores"],
  },
];

const logoAureaDream = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.03 91.59" fill="var(--ColorBrowm)" class="footer-logo">
    <path d="M49.03,48.36c-.94.94-2.36,2.18-3.18,2.27s-2.04-1.23-2.83-2.01c-12.74-12.7-16.07-8.97-12.77-19.19,3.49-10.79,7.45-21.04,16.1-29.43,8,9.01,12.1,19.12,15.73,29.78,3.21,9.43-.78,6.27-13.05,18.58Z"/>
    <path d="M35.39,55.3c9.19,11.68,8.91,21.41,10.33,36.29-13.25-1.66-25.94-6.53-33.96-16.56-4.99-6.24-9.07-13.16-10.15-20.94l-1.61-11.6c8.04-3.06,29.08,4.78,35.39,12.8Z"/>
    <path d="M56.41,89.48c-.98-9.15-2.01-17.38-4.63-26.64,6.5-10.23,16.89-19.49,29.48-20.78l10.75-1.11c.59,22.19-13.07,42.28-35.6,48.53Z"/>
  </svg>
`;

function crearColumnaNav(seccion) {
  return `
    <section class="footer-nav-column">
      <span class="footer-nav-title">${seccion.titleList}</span>
      <ul class="footer-nav-list">
        ${seccion.items.map((item) => `<li class="footer-nav-item"><a href="#" class="linksNavbarFooter">${item}</a></li>`).join("")}
      </ul>
    </section>
  `;
}

function renderizarFooter() {
  return `
    <article class="footer-content">
      <section class="footer-top">
        <div class="footer-brand">
          <div class="footer-brand-logo">
            <div class="bx-logo">${logoAureaDream}</div>
              
            <span class="footer-brand-name">AUREA DREAM</span>
          </div>
          <p class="footer-brand-desc">
            Redefiniendo el cuidado de la piel de alta gama a través del lujo sostenible y la precisión científica.
          </p>
          <div class="footer-brand-icons">
            <a href="#" class="iconsSocial" aria-label="Sitio web"><i class="bxf bx-globe"></i></a>
            <a href="#" class="iconsSocial" aria-label="Email"><i class="bxf bx-envelope"></i></a>
            <a href="#" class="iconsSocial" aria-label="Compartir"><i class="bxf bx-share"></i></a>
          </div>
        </div>
        <nav class="footer-nav">
          ${footerNavList.map(crearColumnaNav).join("")}
        </nav>
      </section>

      <span class="footer-line"></span>

      <section class="footer-bottom">
        <ul class="footer-policy">
          <li class="policyItems-footerBottom"><a class="linksPolicy-footerBottom" href="#">Política de privacidad</a></li>
          <li class="policyItems-footerBottom"><a class="linksPolicy-footerBottom" href="#">Términos de servicio</a></li>
          <li class="policyItems-footerBottom"><a class="linksPolicy-footerBottom" href="#">Accesibilidad</a></li>
        </ul>
      </section>
    </article>
  `;
}

const contenedor = document.querySelector(".content_allFooterSection-aureaDream");
if (contenedor) contenedor.innerHTML = renderizarFooter();
