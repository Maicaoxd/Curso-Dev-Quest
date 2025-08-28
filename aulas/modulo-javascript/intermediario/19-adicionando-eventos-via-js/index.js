/* Eventos adicionados através do JS:

let alerta = function mostrarAlerta() {
  alert("Este é um alerta!");
}; 

*/

// Eventos adicionados através do JS:

let selectDeEstado = document.querySelector("select[name='estado']");

selectDeEstado.addEventListener("change", function () {
  alert(`Mudou o select para ${selectDeEstado.value}`);
}); /* addEventListener: função que observa ações realizadas no elemento selecionado. A ação a ser observada deve ser uma string e adicionada como primeiro parâmetro. O segundo parâmetro deve ser a função contendo instruções do que deve ocorrer quando essa ação é feita.

Podemos adicionar um parâmetro para esta função parâmetro, o "event". Se dermos um console.log(event); é possível observar que ele é um objeto. Uma de suas chaves é "target", cujo valor é o elemento de onde o evento foi disparado (nesse caso, o elemento "select"). Outra chave notável do objeto event é a "type", cujo valor é o tipo do evento que está sendo observado (nesse caso, "change").

Para acessarmos o valor atual de select:

event.target.value;

>>> Também poderia ser escrito sem armazenar o elemento em uma variável:

document.querySelector("select[name='estado']").addEventListener("change", function () {
  alert("Mudou o select");
});

*/
