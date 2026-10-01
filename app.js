import PromptSync from "prompt-sync"
const prompt = PromptSync()

import criarSaudacao from "./criarSaudacao.js"
import criarPedido from "./criarPedido.js"
import calcularTotal from "./calcularTotal.js"
import aplicarDesconto from "./aplicarDesconto.js"

function exibirMenu() {
    console.log("\n=== Lanchonete do Bairro ===")
    console.log("1. Dar boas-vindas ao cliente")
    console.log("2. Registrar pedido")
    console.log("3. Calcular desconto")
    console.log("4. Ver vendas do dia")
    console.log("0. Sair")
}

let opcao

do {
    exibirMenu()
    opcao = prompt("Escolha uma opção: ")
    switch (opcao) {
        case "1":
            let nomeCliente = prompt("Nome do cliente: ")
            console.log(criarSaudacao(nomeCliente))
            break
        case "2":
            let produto = prompt("Produto: ")
            let preco = Number(prompt("Preço unitário (R$): "))
            let quantidade = Number(prompt("Quantidade: "))
            let pedido = criarPedido(produto, preco, quantidade)
            let total = calcularTotal(pedido)
            console.log(`Pedido: ${quantidade}x ${pedido.produto}`)
            console.log(`Total: R$ ${total.toFixed(2)}`)
            break
        case "3":
            let valorCompra = Number(prompt("Valor da compra (R$): "))
            let percentualDesconto = Number(prompt("Percentual de desconto (%): "))
            let valorComDesconto = aplicarDesconto(valorCompra, percentualDesconto)
            console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`)
            break
        case "0":
            console.log("Caixa fechado. Até amanhã!")
            break
        default:
            console.log("Opção inválida!")
            break
    }
} while (opcao !== "0")