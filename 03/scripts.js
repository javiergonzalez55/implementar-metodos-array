// função que captura o elemento de um array passado como argumento, que está no indice
// ainda passado como argumento e retorna os 3 elementos subsequentes incluindo a elemento
// encontrado.

function capturarElementos(array, indice) {

    const elementosCapturados = array.slice(indice, indice + 3).join(" - ");
    console.log(elementosCapturados);

}

capturarElementos(['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'], 2);
