function trocarCor(event) {
    quadrado = event.target;

    isBlackColor = quadrado.classList.contains('preto')
    if (isBlackColor) {
        quadrado.classList.remove('preto')
        quadrado.classList.add('azul')
    } else {
        quadrado.classList.remove('azul')
        quadrado.classList.add('preto')
    }
}

let quadradoClicado = document
    .getElementById('quadrado')
    .addEventListener('click', trocarCor)