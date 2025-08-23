// FUNÇÃO COMO PARÂMETRO DE OUTRA FUNÇÃO

const calcularAnoDeNascimento = function (
  idade,
  mesDeNascimento,
  imprimirAnoDeNascimento
) {
  const mesAtual = 10;
  let anoDeNascimento = 2022 - idade; 
  if (mesDeNascimento > mesAtual) anoDeNascimento--; 
  imprimirAnoDeNascimento(anoDeNascimento);
};

let imprimirAnoDeNascimento = (anoDeNascimento) => {
  console.log("Seu ano de nascimento é " + anoDeNascimento);
};

calcularAnoDeNascimento(23, 8, imprimirAnoDeNascimento);

// OUTRO EXEMPLO:

function mostrarNome(nome, imprimirNome) {
  imprimirNome(nome);
}

let imprimirNome = (nome) => console.log("Seu nome é " + nome + ".");

mostrarNome("Lichtle", imprimirNome);

/* FUNÇÃO QUE RETORNA OUTRA FUNÇÃO. ANALISE O EXEMPLO ABAIXO:

function dobrar(numero1) {
  return numero1 * 2;
}

console.log(dobrar(4));

>>> A função acima poderia também ser escrita da seguinte forma:

let dobrar = (numero) => numero * 2;

console.log(dobrar(5));

>>> Agora vamos supor que queremos ter mais duas funções, de triplicar e quadruplicar o número passado como parâmetro. Poderíamos fazer da seguinte forma, que não é recomendada por repetir muito código:

function dobrar(numero) {
  return numero * 2;
}

function triplicar(numero) {
  return numero * 3;
}

function quadruplicar(numero) {
  return numero * 4;
}

>>> Ao invés disso, podemos fazer uma função que retorna outra função. Perceba que a função dada como exemplo acima passa a ser o retorno de uma função de ordem maior, a qual foi criada para alterar apenas o multiplicador do número:

*/

function multiplicar(multiplicador) {
  return function (numero) {
    return numero * multiplicador;
  };
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar(5));
console.log(triplicar(5));
console.log(quadruplicar(5));
