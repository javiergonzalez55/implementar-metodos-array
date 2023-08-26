// codigos que modificam um array da seguinte maneira:
// Organizar o array na ordem inversa e transformar em uma única string separada por vírgulas
// Remover o primeiro e último item do array original e adicione a fruta `Melão` ao novo array

const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
console.log(frutas.reverse().join(", "));

frutas.reverse();
frutas.splice(0, 1);
frutas.splice(frutas.length - 1, 1);
frutas.push(`Melão`);
console.log(frutas.join(", "));

