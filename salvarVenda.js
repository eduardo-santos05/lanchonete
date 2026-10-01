import fs from 'node:fs';

export default function salvarVenda(texto) {
    return fs.appendFileSync('vendas.txt', texto + '\n');
}