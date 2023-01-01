export default function initImagemTrocando() {
  window.onload = function () {
    const main = document.querySelector("main");
    setInterval(trocarImagem, 3000);
    setInterval(trocarImagemDois, 5000);
    function trocarImagem() {
      main.style.backgroundImage =
        "url('../imagens/introducao/introducao2.png')";
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundSize = "cover";
      main.style.backgroundPosition = "center";
      main.style.padding = "100px 0px";
    }
    function trocarImagemDois() {
      main.style.backgroundImage =
        "url('../imagens/introducao/introducao.png')";
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundSize = "cover";
      main.style.backgroundPosition = "center";
      main.style.padding = "100px 0px";
    }
  };
}
