// programa que filtra apenas os numeros pares de um array de numeros

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filtrarNumerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(filtrarNumerosPares);