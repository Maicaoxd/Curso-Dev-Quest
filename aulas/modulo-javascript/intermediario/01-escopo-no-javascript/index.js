/* ESCOPO DE BLOCO (IF/ELSE, WHILE, FOR E BLOCOS DE CÓDIGO AUTÔNOMOS ({ })

>>> EXEMPLO COM IF:

if (true) {
  const mensagem = "Olá, mundo!";
  console.log(mensagem); // Aqui a variável "mensagem" será lida, pois ela se encontra dentro do escopo onde foi criada
}

console.log(mensagem); // Aqui a variável "mensagem" não será lida, pois ela se encontra fora do escopo de bloco onde foi criada

>>> EXEMPLO COM BLOCO DE CÓDIGO AUTÔNOMO:

{
  let mensagem = "Olá!"; // Aqui a variável "mensagem" será lida, pois ela se encontra dentro do escopo onde foi criada
}

console.log(mensagem) // Aqui a variável "mensagem" não será lida, pois ela se encontra fora do escopo de bloco onde foi criada */

/* ESCOPO GLOBAL

>>> A VARIÁVEL var POSSUI ESCOPO GLOBAL, EXCETO SE FOR CRIADA DENTRO DE UMA FUNÇÃO:

{
  var mensagem = "Olá, tudo bem?"
}

console.log(mensagem) // A variável "mensagem" será lida mesmo fora do escopo onde foi criada, pois seu escopo é global 


>>> EXEMPLO COM A VARIÁVEL var DENTRO DO ESCOPO DE UMA FUNÇÃO:

function falar(){
  var mensagem = "Seja bem-vindo!"
}

falar() // Exibirá a mensagem, pois está chamando a função

console.log(mensagem) // Não exibirá a mensagem, pois está chamando a variável var fora do escopo da função. É o único caso em que a variável global var não é lida

>>> EXEMPLO COM FUNÇÃO DENTRO DE OUTRA FUNÇÃO:

*/

function falar() {
  var mensagem = "Seja bem-vindo!";
  console.log(mensagem);
  function falarOutraCoisa() {

  }

  falarOutraCoisa();
  console.log(falarOutraCoisa);
}

falar(); /* Output: 

Seja bem-vindo!
ƒ falarOutraCoisa() {
    
  }

*/

console.log(falarOutraCoisa); // Não é exibido
