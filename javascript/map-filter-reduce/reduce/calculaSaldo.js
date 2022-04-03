const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldo, arr){
    return arr.reduce(function(accumulator, current, index){
        console.log('rodada', index + 1)
        console.log({ accumulator })
        console.log({ current })
        return accumulator - current.preco;
    }, saldo)
}

console.log(calculaSaldo(saldoDisponivel, lista));