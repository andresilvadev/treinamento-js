const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(function(item){
    return item * 2;
});

// Usado quando utilizamos funções anonimas
const newArr2 = arr.map((item) => { 
    return item * 2;
});

// Quando a função recebe apenas um parametro podemos remover os parenteses
const newArr3 = arr.map(item => { 
    return item * 2;
});


// Quando a função retorna apenas uma informação sem ter várias linhas de informação 
// podemos remover as chaves e a keyword return
const newArr4 = arr.map(item => item * 2);

console.log(newArr);
console.log(newArr2);
console.log(newArr3);
console.log(newArr4);


/**
 * Podemos tbm criar funções utilizando constantes
 */
function teste() {
    console.log('teste');
}

// Porem não é muito recomendado
const teste = () => {
    console.log('teste arrow');
}


// Porem não é muito recomendado
const testeString = () => 'teste string';
const testeNumber = () => 3;
const testeArray = () => [3, 5, 6];
const testeOjeto = () => { nome: 'Andre'}; // NÃO FUNCIONA por que a chave é utilizada para o corpo da função nesse cado deve usar os ()
const testeNovoObjeto = () => ({ nome: 'Andre'}); // FUNCIONA
