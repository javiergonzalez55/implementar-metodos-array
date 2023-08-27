// codigo que procura por um livro dentro de un array de livros e informa a posição dele

const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const informarPosicaoDoLivro = (nomeDoLivro) => {

    const indiceDoLivro = livros.findIndex((livro) => {
        return livro === nomeDoLivro;
    })
    console.log(`O livro está na posição ${indiceDoLivro + 1}`);
};

informarPosicaoDoLivro(nomeDoLivro);