/* 

>>> Concatenação (método antigo, até o ES6):

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
  return (
    "Primeiro nome: " +
    primeiroNome +
    ". Último nome: " +
    ultimoNome +
    ". Idade: " +
    idade
  );
};

console.log(imprimirInformacoesPessoa("Pablo", "Viana", 26));

Output: "Primeiro nome: Pablo. Último nome: Viana. Idade: 26"

>>> Interpolação (método atualizado):

*/

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
  return `Primeiro nome: ${primeiroNome}. Último nome: ${ultimoNome}. Idade: ${idade}`;
};

console.log(imprimirInformacoesPessoa("Pablo", "Viana", 26));

/* 

>>> Concatenando o retorno de uma função com um texto:

console.log(
  `${imprimirInformacoesPessoa(
    "Leticia",
    "Fernandes",
    23
  )}, seja bem-vinde à guilda!`
);

>>> Concatenando uma variável com um texto:

console.log(`Soma: ${881 + 457}`);

*/


