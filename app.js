import PromptSync from "prompt-sync"
const prompt = PromptSync()

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
        case "0":
            console.log("Caixa fechado. Até amanhã!")
            break
        default:
            console.log("Opção inválida!")
            break
    }
} while (opcao !== "0")