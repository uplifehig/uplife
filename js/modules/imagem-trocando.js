export default function initImagemTrocando() {
  const main = document.querySelector(".introducao-bg");
  setInterval(trocarImagem, 3000);
  setInterval(trocarImagemDois, 5000);
  function trocarImagem() {
    main.style.backgroundImage =
      'url("../../imagens/introducao/introducao2.png")';
  }
  function trocarImagemDois() {
    main.style.backgroundImage =
      'url("../../imagens/introducao/introducao.png")';
  }
}
