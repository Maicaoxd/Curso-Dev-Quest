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

let passarCafe = () => console.log("Passando o café");

let tomarCafe = () => console.log("Tomando o café");

let lavarXicara = () => console.log("Lavando a xícara");

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(passarCafe)
  .then(tomarCafe)
  .then(lavarXicara);
