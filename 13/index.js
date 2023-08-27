// Usando o método `sort()` resolva as seguintes questões:

// a. Ordenar o array em ordem crescente.

const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

numeros.sort((numero1, numero2) => { return numero1 - numero2 });
console.log(numeros);


// b. Ordenar o array abaixo em ordem decrescente.

numeros.sort((numero1, numero2) => { return numero2 - numero1 });
console.log(numeros);


// c. Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código
//    Unicode.

numeros.sort();
console.log(numeros);


// d. Ordenar o array abaixo em ordem alfabética.

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

frutas.sort((fruta1, fruta2) => { return fruta1.localeCompare(fruta2) });
console.log(frutas);


// e. Ordenar o array abaixo em ordem alfabética decrescente.

frutas.sort((fruta1, fruta2) => { return fruta2.localeCompare(fruta1) });
console.log(frutas);



// f. Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters 
//    (do que tem menos caracteres, para o que tem mais)

frutas.sort((fruta1, fruta2) => { return fruta1.length - fruta2.length });
console.log(frutas);