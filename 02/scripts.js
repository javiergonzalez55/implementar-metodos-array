// função que divide um array passado como parametro da em grupos (arrays) do tamanho indicado
// pelo numero inteiro passado ainda como parámetro 

// percorrer o array e cortar em indiceNumero

function dividirArray(array, numero) {

    let textoDoArray = "";
    let i = 0;
    let j = 1;

    while (i < Math.ceil(array.length / numero)) {

        textoDoArray = array.slice(numero * i, numero * j).join(", ");
        i++;
        j++;
        console.log(`Grupo ${i}: ${textoDoArray}.`);

    }
};

dividirArray(['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', "Javier", "João"], 4);

