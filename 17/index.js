// Utilizando `reduce()` faça um programa que determina o maior valor de um array de 
// números inteiros e imprima o resultado.

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const retornarNumeroMaior = numeros.reduce((acumulador, valorAtual) => {
    if (acumulador < valorAtual) { acumulador = valorAtual };
    return acumulador;
});

console.log(retornarNumeroMaior);