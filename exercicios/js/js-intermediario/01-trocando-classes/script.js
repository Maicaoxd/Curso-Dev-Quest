function trocarCorPrimeiroBotao() {
    let quadrados = document.getElementsByClassName('quadrado');
    let primeiroQuadrado = quadrados[0];

    primeiroQuadrado.classList.remove('azul')
    primeiroQuadrado.classList.add('amarelo')
}