import { soma, multiplicacao as multiplica } from '../scripts/funcoes'; // export devemos chamar o mesmo nome da função
import subtrair from '../scripts/subtracao';// no export defaul podemos chamar com o nome que a gente quiser
// import * as funcoes './funcoes'; // Importa todas as funções em um objeto

console.log(soma(1, 2));
console.log(subtrair(8, 3));
console.log(multiplica(5, 5)); // Renomeando a função importada