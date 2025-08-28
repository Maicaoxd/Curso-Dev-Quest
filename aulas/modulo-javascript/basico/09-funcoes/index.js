/* SINTAXE

function nomeDaFuncao(parametros){
	bloco de execução
}

*/

function incentivarQuester(nomeQuester = "Quester") {
  alert("Muito bem, " + nomeQuester + ", você chegou ao JS. Continue assim!");
}

//incentivarQuester();

function soma(num1, num2) {
  return num1 + num2;
}

let resultadoDaSoma = soma(5, 5);

console.log(resultadoDaSoma);

resultadoDaSoma = soma(resultadoDaSoma, 5);

console.log(resultadoDaSoma);
