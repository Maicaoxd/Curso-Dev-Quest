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

let passarCafe = (aguaFervida) => {
  return new Promise(function (resolve) {
    console.log("Passando o café");
    resolve();
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise(function (resolve) {
    console.log("Tomando o café");
    resolve();
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise(function (resolve) {
    console.log("Lavando a xícara");
    resolve();
  });
};

/* 

>>> USANDO O THEN:

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(passarCafe)
  .then(tomarCafe)
  .then(lavarXicara); 

>>> USANDO ASYNC E AWAIT:

*/

async function fazerCafe() {
  const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
  const cafePassado = await passarCafe(aguaFervida);
  const cafeTomado = await tomarCafe(cafePassado);
  const xicaraLavada = await lavarXicara(cafeTomado);
  if (xicaraLavada) console.log("Finalizado o ritual de tomar café");
}

fazerCafe();
