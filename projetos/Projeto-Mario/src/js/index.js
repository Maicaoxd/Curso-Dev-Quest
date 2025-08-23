/*

OBJETIVO 1 - quando o usuario clicar no botao de veja o trailer, devemos abrir a modal com o video do trailer.

OBJETIVO 2 - quando o usuario clicar no X devemos fechar o modal.

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;
function alternarModal() {
    modal.classList.toggle("aberto");
};

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
    console.log("clicou no botão veja o trailer");
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
    console.log("clicou no botão X");
});