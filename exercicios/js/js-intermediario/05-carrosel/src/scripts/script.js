const listaImagens = [
  'src/images/image1.png',
  'src/images/image2.png',
  'src/images/image3.png',
  'src/images/image4.png'
];

let pagAtual = 0;

const menos = document.getElementById('seta-menos');
const mais  = document.getElementById('seta-mais');

atualizarBGEOpacidade();

menos.addEventListener('click', () => definirCarrosel(pagAtual, -1));
mais .addEventListener('click', () => definirCarrosel(pagAtual,  1));

function definirCarrosel(_atual, passo) {
  const novo = pagAtual + passo;

  if (novo < 0 || novo > listaImagens.length - 1) return;

  pagAtual = novo;
  atualizarBGEOpacidade();
}

function atualizarBGEOpacidade() {
  document.body.style.backgroundImage = `url('${listaImagens[pagAtual]}')`;
  menos.classList.toggle('opacidade', pagAtual === 0);
  mais .classList.toggle('opacidade', pagAtual === listaImagens.length - 1);
}
