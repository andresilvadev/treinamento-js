// REST - Pega o resto de  uma desestruturação ou passagem de parametros
const usuario = {
    nome: 'Andre',
    idade: '23',
    signo: 'Leão'
}

// a variavel resto recebe o restante das outras propriedades do usuário
const { nome, ...resto } = usuario;


const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);


function soma(a, b, c) {
    return a + b + c;
}

function somaRest(...params){
    return params.reduce((total, next) => total + next);
}

function somaRest2(a, b, c, ...params){
    return params;
}

console.log(soma(1, 3, 4));
console.log(somaRest(1, 3, 4));
console.log(somaRest2(1, 3, 4));




// SPREAD - Repassa as informações de um objeto ou array para um aoutra estrutura de dados
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2];

console.log(arr3);



const usuario1 = { 
    nome: 'Silva Dev',
    idade: '23',
    signo: 'Leao'
}

// Copia todas as propriedades do usuario1 sobrepondo o nome
const usuario2 = { ...usuario1, nome: 'Andre'};
console.log(usuario2);