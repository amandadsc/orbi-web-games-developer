const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ehPar(num){
    return num%2 == 0;
}

console.log(numeros.filter(ehPar))

/* OUTRA FORMA DE FAZER

function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 == 0;
}

console.log(filtraPares(numeros));

*/