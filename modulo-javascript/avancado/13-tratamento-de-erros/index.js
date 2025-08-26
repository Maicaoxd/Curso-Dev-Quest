let chaleiraEstaNoFogao = "string";
let fogaoEstaLigado = false;

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (typeof chaleiraEstaNoFogao != "boolean") {
      throw "Somente o tipo booleano é aceito";
    }

    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("Começando o processo de ferver a água");
      resolve();
    } else {
      const mensagemDeErro =
        "É necessário colocar a chaleira com água em cima do fogão ligado, senão seu cafezinho não ficará pronto nunca! :c";
      reject(mensagemDeErro);
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

async function fazerCafe() {
  try {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
    const cafePassado = await passarCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavarXicara(cafeTomado);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finalizado o ritual de tomar café");
  }
}

fazerCafe();
