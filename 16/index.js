// programa que valida se as palavas informadas como argumento em uma função existem pelo
// menos una vez dentro de um array de palavras que representam as compras que o João deve
// fazer no mercado. Caso existir deve se imprimir `revise sua lista, joão. possui bebida 
// com venda proibida!` se não imprime `tudo certo, vamos as compras!`

const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const validarListaDeCompras = (palavra1, palavra2, arrayPalavras) => {

    const encontrarPlavraProibida = arrayPalavras.some((palavraProibida) => {
        return palavraProibida === palavra1 || palavraProibida === palavra2;
    })
    if (encontrarPlavraProibida) {
        console.log(`revise sua lista, joão. possui bebida com venda proibida!`)

    } else {
        console.log(`tudo certo, vamos as compras!`)

    }
}
validarListaDeCompras(`cerveja`, `vodka`, palavras);
