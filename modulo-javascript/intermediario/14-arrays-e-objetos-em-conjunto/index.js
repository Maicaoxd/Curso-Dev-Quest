let jogo1 = {
  nome: "GTA V",
  anoLancamento: 2013,
};

let jogo2 = {
  nome: "Call of Duty: Warzone",
  lancamento: 2020,
};

// Lembre-se de declarar as variáveis antes de utilizá-las em um objeto

let videogame = {
  nome: "Playstation",
  valor: 3000,
  jogos: [jogo1, jogo2], // Array de objetos dentro de outro objeto
};

/* Também é possível criar um array de objetos diretamente na propriedade, sem tê-lo declarado em uma variável antes. Por exemplo:

let videogame = {
  nome: "Playstation",
  valor: 3000,
  jogos: [
      {nome: "Final Fantasy VII Remake"},
      {nome: "Call of Duty: Warzone"};
  ]
}

*/

// Adicionando um novo objeto ao array de jogos

let jogo3 = {
  nome: "Final Fantasy VII Remake",
  lancamento: 2020,
};

videogame.jogos.push(jogo3);

console.log(videogame);

// Também podemos ter um objeto dentro de outro objeto:

// let cliente = {
//   nome: "Leticia",
//   ultimoPedido: {
//     produto: "Playstation",
//     valor: 3000,
//   },
// };

// Exemplo mais complexo com arrays:

let cliente = {
  nome: "Leticia",
  ultimoPedido: {
    produto: "Playstation",
    valor: 3000,
    jogos: [
      { nome: "Final Fantasy VII Remake" },
      { nome: "Call of Duty: Warzone" },
    ],
  },
};

// Para acessar esses dados: console.log(cliente.ultimoPedido.jogos[0].nome); 

// Output: Final Fantasy VII Remake
