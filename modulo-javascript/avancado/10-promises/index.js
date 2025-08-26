/*

Pendente (estado inicial de toda promise)
Realizada (RESOLVE [função]: sucesso na execução) // As funções resolve e reject podem ter parâmetros
Recusada (REJECT [função]: falha na execução) // As funções resolve e reject podem ter parâmetros
Estabelecida (relizada ou recusada)

*/

/* Anatomia de uma promise:

new Promise((resolve, reject) => {
  // Promise é uma classe do JS, e classes começam com letra maiúscula
});

*/

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      resolve();
      console.log("Começando o processo de ferver a água");
    } else {
      reject();
      console.log(
        "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água"
      );
    }
  });
};

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
