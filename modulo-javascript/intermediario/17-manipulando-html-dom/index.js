function adicionarComentario() {
  let inputComentario = document.getElementsByName("novo-comentario"); // 1) Acessa elementos através do valor do atributo name. Nesse caso estamos procurando um elemento que tenha o atributo name de valor "novo-comentario". A pesquisa resultará em uma NodeList com um único item, um input.

  /* console.log(inputComentario);

  >>> Output:
  
  NodeList [input]
  0: input
  length: 1
  
  */

  let textoDigitado =
    inputComentario[0]
      .value; /* 2) A pesquisa anterior resultou em uma NodeList (array) com apenas um item, mas poderiam haver mais, e é por isso que o próximo passo consiste em indicar o índice do item cujo valor (comentário) estamos querendo acessar. Nesse caso o índice é 0, pois a pesquisa resultou em um array com apenas um item. Então pegamos o valor inserido (texto digitado) nesse elemento através do método .value

  console.log(textoDigitado);

  >>> O output será o texto digitado no input.
  
  */

  let novosComentarios = document.getElementById("novos-comentarios"); // 3) Pegando o elemento onde queremos colocar o comentário acima. Nesse caso, será uma div vazia de id "novos-comentarios"

  novosComentarios.innerHTML += `<p>Seu comentário: ${textoDigitado}</p>`; // 4) Adicionando o comentário através do método .innerHTML, que insere porções de HTML dentro de determinado elemento. Nesse caso, o que queremos adicionar é um parágrafo contendo o comentário que foi escrito e armazenado na variável textoDigitado. Podemos utilizar o template literals (${...}) para concatenar textos e valores de variáveis sem a necessidade da utilização do sinal de +. Além disso, o += faz com que novas inserções de comentário apareçam uma abaixo da outra, pois do contrário cada comentário feito sobrescreveria o anterior. O += nesse exemplo é o mesmo que escrever novosComentarios.innerHTML = novosComentarios.innerHTML + `<p>Seu comentário: ${textoDigitado}</p>`
}