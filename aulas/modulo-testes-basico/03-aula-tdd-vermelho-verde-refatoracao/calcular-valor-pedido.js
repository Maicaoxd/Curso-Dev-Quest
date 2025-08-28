const acrescimoValorEntrega = 0.2

const calcularValorPedido = (pedido) => {
  const valorProdutos = pedido.itens 
    .filter((item) => !item.entrega) 
    .reduce((valorTotal, valorAtual) => valorTotal + valorAtual.valor, 0); 

  const entrega = pedido.itens.filter((item) => item.entrega); 

  if (pedido.estado === 'RS' || pedido.estado === 'SC') {
    const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega;
    entrega[0].valor += acrescimoEntrega;
  }

  return (valorProdutos > 500 ) ? valorProdutos : valorProdutos + entrega[0].valor;
};

module.exports = calcularValorPedido;
