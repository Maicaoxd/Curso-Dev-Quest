/* ESTRUTURA DE UMA FUNÇÃO ANÔNIMA:

let resultadoDaSoma = function (numero1, numero2) {
  return numero1 + numero2;
};


console.log(resultadoDaSoma(12, 2));

*/

/* ESTRUTURA DE UMA ARROW FUNCTION:

>>> Removemos a palavra reservada "function" e, no caso de haver apenas uma linha dentro do bloco de execução, podemos remover as chaves. Além disso, caso a função tenha apenas uma linha e seja um return, a palavra reservada "return" também pode ser omitida:

*/

let resultadoDaSoma = (numero1, numero2) => numero1 + numero2;

console.log(resultadoDaSoma(12, 2));

// OUTRO EXEMPLO:

// No caso de haver apenas um parâmetro, os parênteses não são necessários

const incentivarQuester = (nomeQuester) =>
  console.log(
    "Parabéns, " + nomeQuester + ", você chegou ao módulo de JS Intermediário!"
  );

incentivarQuester("Lichtle");
