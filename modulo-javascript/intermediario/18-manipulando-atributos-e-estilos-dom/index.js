function alterarCorFundoPrimeiroPost() {
  let primeiroPost = document.getElementsByClassName("post")[0];
  primeiroPost.style.backgroundColor = "lightPink";
}

function aumentarFonteSegundoPost() {
  let segundoPost = document.getElementsByClassName("texto-post")[1];

  segundoPost.classList.add("fonte-grande"); // Para acessar a lista de classes de determinado elemento utilizamos o método classList. Para adicionar elementos à essa lista, utilizamos o método add
}

// 1) Criar uma função com instruções do que deve acontecer a depender se clicamos no botão X ou se clicamos no botão Y (condicional if/else). Para isso também é necessário adicionar um parâmetro à ela. Para que ela dispare é necessário que os elementos button tenham o atributo onclick com o valor sendo essa função.

function marcarRadio(genero) {
  // 2) Acessar as duas opções (inputs do tipo radio) e armazenamos em duas variáveis distintas:
  let generoMasculino = document.getElementById("genero-masculino");
  let generoFeminino = document.getElementById("genero-feminino");

  // 3) Criar uma condicional para definir que, se o parâmetro passado na função for igual a “M”, o atributo checked deve ser atribuído ao botão “Marcar radio masculino” através do método também chamado checked. Mas, se o parâmetro passado na função for igual a “F”, o atributo checked deve ser atribuído ao botão “Marcar radio feminino”. Os parâmetros “M” e “F” já foram passados na criação dos botões no documento HTML.
  if (genero === "M") {
    generoMasculino.checked = true;
  } else if (genero === "F") {
    generoFeminino.checked = true;
  }
}
