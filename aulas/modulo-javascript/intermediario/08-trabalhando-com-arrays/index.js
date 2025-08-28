let listaDeCompras = [
  "Tomate",
  "Arroz",
  "Feijão",
  "Leite",
  "Cebola",
  "Abobrinha",
  "Chocolate",
];

for (let i = 0; i < listaDeCompras.length; i++) {
  console.log("Item " + (i + 1) + ": " + listaDeCompras[i]);
}

/* Podemos também utilizar o forEach, um dos métodos de objetos do tipo array:

listaDeCompras.forEach(function (item, indice) {
  console.log("Item " + (indice + 1) + ": " + item);
});

*/

// MÉTODOS:

let frutas = ["Banana", "Maçã", "Laranja"];

frutas.push("Morango"); // Adiciona um item na última posição do array

console.log(frutas);

/* 

frutas.pop(); // Remove o último item do array

frutas.shift(); // Remove o primeiro item do array

frutas.unshift("Pêra"); // Adiciona um item na primeira posição do array

array.indexOf(item) // Indica o índice de um item. Veja o exemplo abaixo:

*/

console.log(frutas.indexOf("Laranja"));

// Output: 2
