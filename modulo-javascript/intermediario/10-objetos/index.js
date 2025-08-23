let tenis = {
  cor: "preto",
  tamanho: 37,
  emEstoque: true,
};

console.log(tenis); // Exibe todas as propriedades do objeto

console.log(tenis.tamanho); // Exibe o valor de uma propriedade específica do objeto. Nesse caso, queremos saber o valor de "tamanho", que é 37

console.log(tenis["emEstoque"]); // Outra forma de exibir o valor de uma propriedade. Nesse caso, o valor de "emEstoque", que é true

// Adicionando propriedades ao objeto:

tenis.valor = 170;

console.log(tenis);
