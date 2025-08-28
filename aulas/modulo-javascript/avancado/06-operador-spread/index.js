const pessoas = ["Roberto", "Ricardo", "Raphael"];

console.log(
  ...pessoas
); /* Retorna 3 itens separados. Dessa forma é possível, por exemplo, criar um novo array com esses itens + itens separados de outro array.

>>> Antigamente era utilizado o .concat: 

pessoas1 = grupo1.concat(grupo2).concat(grupo3) e assim por diante. 

Agora considere os seguintes arrays: */

let grupo1 = ["Roberto", "Ricardo", "Raphael"];
let grupo2 = ["Pablo", "Lizzy", "Jazmin", "Ruby"];

grupo1 = [...grupo1, ...grupo2];

console.log(grupo1);

/* Output: (7) ['Roberto', 'Ricardo', 'Raphael', 'Pablo', 'Lizzy', 'Jazmin', 'Ruby']

>>> Além disso, o spread pode ser utilizado para clonar objetos:

*/

let personagem = {
  nome: "Valquiria",
  idade: 756,
  altura: 1.56,
  arma: "Adaga",
};

let cloneDoPersonagem = { ...personagem };

console.log(personagem);
console.log(cloneDoPersonagem);
