function mapSemThis(arr){
    return arr.map((item) => item * 2);
}

const numeros = [1, 2, 3, 4, 5];

console.log(mapSemThis(numeros));

console.log(numeros);// array original se mantém