// programa que filtra os numeros de um array de numeros e retorna apenas os positivos

const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

const filtrarNumerosPositivos = numeros.filter((numero) => {
    return numero > 0
});

console.log(filtrarNumerosPositivos);