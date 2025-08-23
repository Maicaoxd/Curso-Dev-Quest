let filmes = [
  "Coringa",
  "Homem Aranha",
  "Vingadores",
  "Capitão América",
  "Batman",
];

console.log(filmes[2]); // Imprime "Vingadores" e não "Homem Aranha", pois o array começa na posição (índice) 0
console.log(filmes); // Imprime todos os itens do array e indica, entre parênteses, quantos itens há dentro desse array

let avaliacoes = [8, 5, 9, 3];

console.log(avaliacoes.length); // Imprime a quantidade de itens que tem dentro do array

// Um mesmo array pode conter diferentes tipos de dado:

let descricaoFilme = ["Vingadores", 9, true]; // Exemplo: nome do filme, nota e se está em cartaz ou não

console.log(descricaoFilme);
