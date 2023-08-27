// programa que procura pela quantidades de caracteres de cada palavra dentro de um array
// de palavras. Caso tenha palavras con mas de 5 caracteres devera imprimir 
// `existe palavra inválida`, se não deve imprimir `array validado`

const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const validarPalavras = palavras.some((palavra) => {
    return palavra.length > 5;
});

if (validarPalavras) {
    console.log(`existe palavra inválida`)
} else {
    console.log(`array validado`)
};