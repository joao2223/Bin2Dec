const binario = document.querySelector('[data-bin]')
const botao = document.querySelector('[data-botao]')
const numeroDecimal = document.querySelector('[data-numero]')
const input = document.querySelector('[data-input]')

function converteBinario(binario) {
    let numeroConvertido = 0
    var cont = binario.length
    binario.map(numero => {
        cont = cont - 1
        let umNumeroConvertido = parseInt(numero) * (2 ** cont)
        numeroConvertido = numeroConvertido + umNumeroConvertido
    });
    numeroDecimal.value = numeroConvertido
}

botao.onclick = function () {
    if (binario.validity.valid) {
        converteBinario(binario.value.split(''));
    } 
    else {
        numeroDecimal.value = ""
        alert('Insira apenas 0 ou 1')
    }
}
