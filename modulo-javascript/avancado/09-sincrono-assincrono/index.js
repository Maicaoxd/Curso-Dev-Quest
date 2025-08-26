function colocarAguaPraFerver() {
  console.log("Colocou a água para ferver");
}

function prepararPraPassarCafe() {
  console.log("Pegou o pó de café");
  console.log("Pegou o filtro");
  console.log("Colocou o café no filtro");
  console.log("Colocou o filtro em cima da xícara");
}

function passarCafe() {
  console.log("Passou o café");
}

colocarAguaPraFerver();
prepararPraPassarCafe();
passarCafe();

/* >>> Essas funções são síncronas, ou seja, a ordem de execução é linear (de cima pra baixo, sendo que uma precisa ser concluída para que a próxima seja executada). Sendo assim, se a função colocarAguaPraFerver demorar 5 minutos para ser concluída, a função prepararPraPassarCafe só será executada após 5 minutos, fazendo com que a gente perca tempo pois ela poderia estar sendo executada enquanto a água do café esquenta. Para isso podemos usar o setTimeout:

function colocarAguaPraFerver() {
  console.log("Colocou a água para ferver");

  setTimeout(() => { // Essa função será executada após 4000 milisegundos (4 segundos)
    console.log("Água ferveu");
    passarCafe();
  }, 4000);
}

function prepararPraPassarCafe() {
  console.log("Pegou o pó de café");
  console.log("Pegou o filtro");
  console.log("Colocou o café no filtro");
  console.log("Colocou o filtro em cima da xícara");
}

function passarCafe() {
  console.log("Passou o café");
}

colocarAguaPraFerver();
prepararPraPassarCafe();

>>> Output:

Colocou a água para ferver
Pegou o pó de café
Pegou o filtro
Colocou o café no filtro
Colocou o filtro em cima da xícara

4 segundos depois...

Água ferveu
Passou o café

*/