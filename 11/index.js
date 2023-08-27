// programa que filtra os elementos de um array de cidades que contenham até 8 caracteres 
// e imprima em formato string

const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const filtrarCidades = cidades.filter((cidade) => {
    return cidade.length <= 8
});

console.log(filtrarCidades.join(", "));