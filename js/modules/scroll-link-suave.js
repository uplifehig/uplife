export default function initScrollLinkSuave() {
  const links = document.querySelectorAll('[data-menu="list"] a');
  links.forEach((link) => {
    link.addEventListener("click", linkClicado);
  });
  function linkClicado(event) {
    if (event.target.getAttribute("href").includes("#")) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const elemento = document.querySelector(href);
      elemento.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
}
