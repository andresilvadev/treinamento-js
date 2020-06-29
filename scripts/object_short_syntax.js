// Object Short Syntax
const nome = 'Andre';
const idade = 23;

const usuario = {
    nome: nome,
    idade: idade,
    signo: 'Leao',
}

// Quando o nome da variavel é igual o nome da propriedade dentro do objeto podemos deixar apenas um deles
const usuario = {
    nome,
    idade,
    signo: 'Leao',
}