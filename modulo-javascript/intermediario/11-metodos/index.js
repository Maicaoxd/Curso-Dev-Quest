let usuario = {
  nome: "Lichtle",
  idade: 23,
  hobby: "comer",
  corFavorita: "lilás",
  saudacao: function () {
    console.log("Bem-vinde à guilda, " + this.nome + "!");
  },
  dizerCaracteristicas: function () {
    console.log(
      this.nome +
        " tem " +
        this.idade +
        " anos, gosta muito de " +
        this.hobby +
        " e sua cor favorita é " +
        this.corFavorita +
        "."
    );
  },
};

usuario.saudacao();
usuario.dizerCaracteristicas();
