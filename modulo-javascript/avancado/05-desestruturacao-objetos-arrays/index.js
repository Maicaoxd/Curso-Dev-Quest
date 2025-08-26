let pessoa = {
  nome: "Roberto",
  sobrenome: "Dias",
  idade: 33,
};

/* 

>>> Método convencional para criar variáveis cujos valores são propriedades de um objeto:

let nome = pessoa.nome;
let idade = pessoa.idade;

console.log(nome);
console.log(idade); 

>>> Agora utilizando a desestruturação de objetos:

*/

let { nome: nome, idade: idade } = pessoa;

console.log(nome);
console.log(idade);

/* Sendo o valor antes dos dois pontos a propriedade que queremos pegar e o valor após os dois pontos o nome que queremos dar para a variável. Após o símbolo de igual deve estar o objeto de onde queremos retirar as propriedades. Além disso, caso o nome da propriedade seja igual ao nome da variável é possível escrever apenas o nome da propriedade, dessa forma:

let { nome, idade } = pessoa; 

Caso seja diferente, é necessário utilizar os dois pontos:

let { nome, idade: idadeDaPessoa } = pessoa; 

>>> Método para criar variáveis cujos valores são itens de um array:

*/

const numeros = [1, 2, 3];

const [um, dois, tres] = numeros;

console.log(um, tres); // Output: 1, 3
