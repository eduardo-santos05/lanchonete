import PromptSync from "prompt-sync"
const prompt = PromptSync()

import criarSaudacao from "./criarSaudacao.js"
import criarPedido from "./criarPedido.js"
import calcularTotal from "./calcularTotal.js"
import aplicarDesconto from "./aplicarDesconto.js"
import salvarVenda from "./salvarVenda.js"
import lerVendas from "./lerVendas.js"

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
            salvarVenda(`${quantidade}x ${pedido.produto} - R$ ${total.toFixed(2)}`)
            break
        case "3":
            let valorCompra = Number(prompt("Valor da compra (R$): "))
            let percentualDesconto = Number(prompt("Percentual de desconto (%): "))
            if (percentualDesconto < 0 || percentualDesconto > 100) {
                console.log("O desconto precisa estar entre 0 e 100.")
                break
            } else {
                let valorComDesconto = aplicarDesconto(valorCompra, percentualDesconto)
                console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`)
                break
            }
        case "4":
            console.log("=== Vendas do dia ===")
            console.log(lerVendas())
            break
        case "0":
            console.log("Caixa fechado. Até amanhã!")
            break
        default:
            console.log("Opção inválida!")
            break
    }
} while (opcao !== "0")