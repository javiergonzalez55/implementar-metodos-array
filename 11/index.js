// programa que filtra um array de strings e retorna um novo array apenas com aqueles que 
// começam com a letra **a**, maiúscula ou minúscula.

const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const filtrarNomesLetraAa = nomes.filter((nome) => {
    return nome.slice(0, 1) === "A" || nome.slice(0, 1) === "a";

})

console.log(filtrarNomesLetraAa);