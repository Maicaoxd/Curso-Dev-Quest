/* ESTRUTURA NORMAL DE UMA FUNÇÃO:

function somar(numero1, numero2) {
  return numero1 + numero2;
}

let resultadoDaSoma = somar(12, 5);
console.log(resultadoDaSoma);

*/

// ESTRUTURA DE UMA FUNÇÃO ANÔNIMA:

let resultadoDaSoma = function (numero1, numero2) {
  return numero1 + numero2;
};

console.log(resultadoDaSoma(12, 2));
