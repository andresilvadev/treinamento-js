const arr = [1, 3, 4, 5 , 8, 9];

// 
/********************************************************
 *                          MAP                         
 * Map percorre o vetor e retorna uma nova informação   
 ********************************************************/
const newArr = arr.map(function(item, index) {
    console.log(index);
    return item * 2;
});

console.log(newArr);

/***********************************
 *              REDUCE      
 * Cada vez que é executado, ele pega o valor do retorno
 * e joga para o total da próxima função executada
 **********************************/
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

/********************************************************
 *                          FILTER                         
 * Filtra todos os itens do array retornando true se ele vai estar no array
 * ou false se ele tem que ser removido
 * neste caso retornamos os itens divisiveis por 2
 ********************************************************/
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

/***********************************
 *              FIND      
 * Verifica se existe uma informação dentro do array e retorna o valor
 * caso contrário retorna undefined
 **********************************/
const find = arr.find(function(item){
    return item === '4';
});

console.log(find);