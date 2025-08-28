/* Considere as informações da aula anterior:

>>> Um mesmo array pode conter diferentes tipos de dado:

let descricaoFilme = ["Vingadores", 9, true]; // Exemplo: nome do filme, nota e se está em cartaz ou não

>>> É possível ter arrays dentro de um array: */

let filmes = [
  ["Vingadores", 8, false],
  ["Coringa", 10, true],
  ["Guardiões da Galáxia", 9, false],
];

console.table(filmes);

console.log(filmes[1][2]); // Pegue o segundo array (índice 1), acesse o terceiro elemento dentro dele (índice 2) e imprima no console. Output: true

console.log(filmes[0][0]); // Pegue o segundo array (índice 1), acesse o terceiro elemento dentro dele (índice 2) e imprima no console. Output: "Vingadores"

// Caso a gente escreva somente, por exemplo, console.log(filmes[2]), o console mostrará todos os itens do terceiro array (índice 2)

// Podemos ainda ter mais arrays dentro do array principal:

let fichaFilmes = [
  ["Mulher Maravilha", 8, false, ["Gal Gadot", 37]],
  ["Coringa", 10, true, ["Joaquin Phoenix", 47]],
];

console.log(fichaFilmes[1][3][1]); // Pegue o segundo array (índice 1), acesse o quarto elemento dentro dele (índice 3, que é outro array) e imprima o segundo item desse array no console. Output: 47
