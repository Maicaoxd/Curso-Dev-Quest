/* Sintaxe:

function(a, b, ...args) {
  ...
}

>>> Considere a função abaixo:

function incentivarQuester(mensagem, nomeQuester) {
  console.log(`${mensagem} ${nomeQuester}`);
}

incentivarQuester(
  "Parabéns por ter chegado ao módulo de JavaScript avançado,",
  "Pablo"
);

>>> Agora imagine que a gente queira imprimir a mesma mensagem para mais de um quester. Para isso utilizamos o REST:

*/

function incentivarQuesters(mensagem, ...nomesQuesters) {
  nomesQuesters.map((nomeQuester) => console.log(`${mensagem} ${nomeQuester}`));
}

incentivarQuesters(
  "Parabéns por ter chegado ao módulo de JavaScript avançado,",
  "Pablo",
  "Lizzy",
  "Ricardo",
  "Roberto"
);
