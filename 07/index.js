// programa que programa que, a partir de um array, cria um novo array com os mesmos 
// elementos mas que todos os elementos comecem com letras maiúsculas e em cada elemento
// seja adicionado o número do índice correspondente

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã", "mElAnCiA"];

let i = 0;

const novoFrutas = frutas.map((fruta) => {

    const iTexto = String(i);
    const frutaFormatada = iTexto + " - " + fruta.slice(0, 1).toUpperCase() + fruta.slice(1).toLowerCase();
    i++;
    return frutaFormatada;

})

console.log(novoFrutas);