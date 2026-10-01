import fs from 'node:fs'
export default function lerVendas() {
    if (!fs.existsSync('vendas.txt')) {
        return "Nenhuma venda registrada hoje."
    } else {
        return fs.readFileSync('vendas.txt', 'utf8')
    }
}