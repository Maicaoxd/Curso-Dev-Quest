let pessoas = [
  { nome: "Eu", idade: 23 },
  { nome: "Lizzy", idade: 19 },
  { nome: "Roberto", idade: 33 },
];

/* FILTRAR RESULTADOS SEM USAR O FILTER:

let pessoasMaioresDe20Anos = [];

for (i = 0; i < pessoas.length; i++) {
  if (pessoas[i].idade > 20) {
    pessoasMaioresDe20Anos.push(pessoas[i]);
  }
}

console.log(pessoasMaioresDe20Anos);

*/

// FILTRAR RESULTADOS USANDO O FILTER:

let pessoasMaioresDe20Anos = pessoas.filter(function (pessoa) {
  // O parâmetro "pessoa" é o item que será testado a cada iteração do array
  return pessoa.idade > 20; // Condição a ser testada
});

console.log(pessoasMaioresDe20Anos);

/* Caso a gente queira simplificar ainda mais, é possível transformar a função em uma arrow function:

let pessoasMaioresDe20Anos = pessoas.filter(pessoa => pessoa.idade > 20);

*/
