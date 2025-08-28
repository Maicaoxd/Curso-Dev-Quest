const calcularValorPedido = (pedido) => {
  const valorProdutos = pedido.itens 
    .filter((item) => !item.entrega) 
    .reduce((valorTotal, valorAtual) => valorTotal + valorAtual.valor, 0); 

  const entrega = pedido.itens.filter((item) => item.entrega); 

  if (valorProdutos > 500) {
    return valorProdutos;
  } else {
    return valorProdutos + entrega[0].valor;
  }
};

module.exports = calcularValorPedido;
