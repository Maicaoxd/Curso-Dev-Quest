/* Literalmente “içamento” (elevação; ir para o topo) e é um comportamento que acontece nos bastidores do JS. Ele permite que você execute funções antes das suas declarações, mas não é recomendado quando trabalhamos com variáveis:

>>> No caso da variável do tipo var, o hoisting trata como sendo duas instruções separadas:

var pais; // Declaração
pais = "Brasil"; // Atribuição

>>> Dito isso, veja o seguinte código:

console.log(pais);
var pais = "Brasil";

>>> Ele é interpretado da seguinte forma pelo hoisting:

var pais;
console.log(pais);
pais = "Brasil";

>>> Quando declaramos uma variável sem atribuir um valor à ela, seu valor é undefined. Como visto acima, devido ao hoisting a ordem de leitura deste código é: declaração > console.log > atribuição. Devido a isso o output que vemos no console neste exemplo é “undefined"

>>> As variáveis do tipo let e const não podem ser lidas até que tenham sido totalmente inicializadas. Portanto o mesmo exemplo acima utilizando let ou const terá como output um erro, e não mais o valor undefined

*/

console.log(pais);
var pais = "Brasil";
