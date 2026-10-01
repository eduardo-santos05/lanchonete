import criarPedido from "./criarPedido.js"

export default function calcularTotal(pedido) {
    return pedido.preco * pedido.quantidade
}