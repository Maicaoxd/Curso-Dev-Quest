let pessoas = [
  { nome: "Eu", idade: 23 },
  { nome: "Lizzy", idade: 19 },
  { nome: "Roberto", idade: 33 },
];

/* SEM MAP

Diferente do filter, que resulta em um array com menos itens, o map resulta em um array com o mesmo número de itens, mas pega apenas uma informação específica deste item. Neste exemplo queremos apenas o nome das pessoas (e de todas as pessoas): 

let nomeDasPessoas = [];

for (let i = 0; i < pessoas.length; i++) {
  nomeDasPessoas.push(pessoas[i].nome);
}

console.log(nomeDasPessoas);

*/

// COM MAP

let nomeDasPessoas = pessoas.map(function (pessoa) {
  return pessoa.nome;
});

console.log(nomeDasPessoas);

/* Transformando em uma arrow function: 

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome;

*/

