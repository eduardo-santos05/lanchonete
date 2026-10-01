export default function aplicarDesconto(valor, percentual) {
    return valor - (valor * (percentual / 100))
}