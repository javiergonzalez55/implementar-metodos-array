// programa que filtra os usuarios que possuam entre 18 e 65 anos de idade, e no array
// filtrado valida se todos estám habilitados, caso seja imprime `todos passaram no teste`
// se não imprime `todos precisam estar habilitados`

const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: true,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const filtrarUsuarios = usuários.filter((usuario) => {
    return usuario.idade >= 18 && usuario.idade <= 65;
});

const validarHabilitados = filtrarUsuarios.every((usuario) => {
    return usuario.habilitado === true;
});

if (validarHabilitados) {
    console.log(`todos passaram no teste`);
} else {
    console.log(`todos precisam estar habilitados`)
};

