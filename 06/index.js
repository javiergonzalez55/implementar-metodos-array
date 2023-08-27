// programa que localiza o cep e informa o endereço da rua

const encontarEndereço = (cep) => {
    const endereços = [
        { cep: 00111222, rua: "Rua dos Artistas" },
        { cep: 00111333, rua: "Rua Augusta" },
        { cep: 00222444, rua: "Avenida Paralela" },
        { cep: 11222333, rua: "Rua Carlos Gomes" },
    ];

    const encontrarRua = endereços.find((endereço) => {
        return endereço.cep === cep;
    })
    console.log(encontrarRua.rua);
};

encontarEndereço(00111222); // "Avenida Paralela"