## Map
É quando um conjunto passar por uma operação e se torna outro conjunto.
- Cria um novo array
- Não modifica o array original 
- Esse método realizar as operações em ordem

```
array.map(callback, thisArg)

callback(item, index, array)
```

Callback: função a ser executada em cada elemento
thisArg (opcional): valor de 'this' dentro da função de callback

### Map vs forEach
- Valor de retorno
- Considere se o array auxiliar será necessário

```
const array = [1, 2, 3, 4, 5];
array.map((item) => item * 2); //retorno: [2, 4, 6, 8, 10];

const array = [1, 2, 3, 4, 5];
array.forEach((item) => item * 2); //retorno: undefined
```



## Filter

- Cria um novo array
- Não modifica o array original

```
array.filter(callback, thisArg)
```

Callback: função a ser executada em cada elemento
thisArg (opcional): valor de 'this' dentro da função de callback

```
const frutas = ['maçã fuji', ' maçã verde', ' laranja', ' abacaxi'];
frutas.filter((fruta) => fruta.includes('maçã'))
// retorno: ['maçã fuji', 'maçã verde'];
```



## Reduce

Executa uma função em todos os elementos do array, retornando um valor único.

```
array.reduce(callbackFn, initialValue)
```

Calback: função a ser executada a partir do acumulador
initialValue (opcional): valor sobre o qual o retorno final irá atuar

```
const callbackFn = function(accumulator, currentValue, index, array){
	// do something
}

array.reduce(callbackFn, initialValue)
```

Accumulator/prevValue: acumulador de todas as chamadas de callbackFn
currentValue: elemento atual sendo acessado pela função