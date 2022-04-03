/* SET - são estruturas de dados únicos
* para retornar o tamanho usa a propriedade size
* não possui métodos de Array
* .has() - verificar se possui um valor
* .add() - adiciona um valor
* .delete() - excluir um valor
*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    //return mySet; retorna os valores únicos fora de um array

    return [...mySet]; //argumento rest
}

console.log(valoresUnicos(meuArray));