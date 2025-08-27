const calcularValorPedido = require("./calcular-valor-pedido.js") ;

const meuPedidoComDesconto = {
  itens: [
    { nome: "Poção de vida", valor: 100 },
    { nome: "Espada de prata", valor: 200 },
    { nome: "Entrega", valor: 40, entrega: true },
  ],
};


const meuPedidoSemDesconto = {
  itens: [
    { nome: "Poção de vida", valor: 50 },
    { nome: "Espada de bronze", valor: 50 },
    { nome: "Entrega", valor: 40, entrega: true },
  ],
};

it("Deve calcular o valor do pedido com desconto de frete", () => {
  expect(calcularValorPedido(meuPedidoComDesconto)).toBe(300);
});

it("Deve calcular o valor do pedido sem desconto de frete", () => {
  expect(calcularValorPedido(meuPedidoSemDesconto)).toBe(140);
});