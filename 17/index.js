// programa que valida se todos os numeros de um array de numeros são pares. Caso sejam
// deve imprimir `array válido` se não imprimir `array inválido`

const numeros = [0, 122, 4, 6, 10, 3, 44];

const validarNumeros = numeros.every((numero) => {
    return numero % 2 === 0;
});

if (validarNumeros) {
    console.log(`array válido`);
} else {
    console.log(`array inválido`);
}
;