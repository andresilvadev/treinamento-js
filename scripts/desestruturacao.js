const usuario = {
    nome: 'Andre Silva',
    idade: 22,
    endereco: {
        cidade: 'Ponta Grossa',
        estado: 'PR',
    },
};

// MODELO ANTIGO
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;


// MODELO NOVO (propriedade recebe usuario)
const { nome, idade, endereco: { cidade} } = usuario;






function mostraNome(usuario) {
    console.log(usuario.nome);
}

// OU PODEMOS TROCAR POR ISSO
function mostraNomeIdade({ nome, idade }) {
    console.log(nome);
}

mostraNome(usuario)
mostraNomeIdade(usuario) // Passados o objeto e retiramos as propriedades necessarias na funcao