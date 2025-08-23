"use strict";

// THIS NO ESCOPO GLOBAL:

console.log(this);

// Output: Window (objeto)

// console.log(this) é o mesmo que console.log(window), pois se trata do escopo global. Logo, console.log(window === this) retorna "true"

// THIS NO ESCOPO LOCAL:

let usuario = {
  nome: "Lichtle",
  saudacao: function () {
    console.log("Seja bem-vinde ao palácio da guilda, " + this.nome + "!");
  },
};

usuario.saudacao();

// Output:

/* Propriedades criadas no escopo global podem vazar para o escopo local. Por exemplo:

this.name = "Lichtle";

function saudar() {
  console.log("Olá, " + this.name + "!");
}

saudar();

>>> Output: "Olá, Lichtle!"

Para que isso não aconteça, escreva 'use strict' no começo do documento

*/

// OUTRO EXEMPLO DO THIS NO ESCOPO LOCAL:

let comida = {
  nome: "brócolis",
  temperatura: 80,
};

comida.cozinhar = function (temperaturaDeCozimento) {
  this.temperatura = temperaturaDeCozimento;
};

comida.cozinhar(100);

console.log(comida);

// Output: {nome: 'brócolis', temperatura: 100, cozinhar: ƒ}
