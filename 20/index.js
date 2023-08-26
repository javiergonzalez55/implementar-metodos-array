// Utilizando `reduce()` faça um programa que determina a maior string (em comprimento)
// dentre os elementos de um array de strings e imprime essa string

const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const retornarMaiorString = cidades.reduce((acumulador, valorAtual) => {

    if (acumulador.length < valorAtual.length) { acumulador = valorAtual };
    return acumulador
});

console.log(retornarMaiorString);
