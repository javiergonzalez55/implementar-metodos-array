//  função que facilita encontrar o dono de um pet passado como argumento. caso o dono seja
//  encontrado imprime `O dono(a) do(a) Max é o(a) João`, caso contrário, irá imprimrir 
// `Que pena Max, não encontramos seu dono(a)`.


const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

function encontrarDonoPet(pet) {

    for (let i = 0; i < usuarios.length; i++) {

        for (const item of usuarios[i].pets) {

            if (usuarios[i].pets.includes(pet)) {
                return `O dono(a) do(a) ${pet} é o(a) ${usuarios[i].nome}`;

            }
        }

    };

    return `Que pena ${pet}, não encontramos seu dono(a)`;
};

console.log(encontrarDonoPet("Kuki"));

