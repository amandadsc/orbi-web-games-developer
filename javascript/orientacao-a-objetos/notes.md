## Paradigmas e Pilares

Os programas são "objetos" que possuem uma série de propriedades.

- Abstração: generalizar, simplificar
- Herança: o objeto filho herda propriedades e métodos dos pais, mas também tem seus próprios métodos e propriedades
- Polimorfismo: obejtos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos.
- Encapsulamento: cada classe tem propriedades e métodos independentes do restante do código.

## OOJS

### Protótipos e Classes

Todos os objetos JS herdam propriedaes e métodos de um prototype. O objeto Object.prototype está no topo desta cadeia.

Cadeia de protótipos (prototype chain): Crow > Bird > Animal > Function.prototype > Object.prototype

Classe não existe nativamente no JS, ela é uma syntatic sugar, uma sintaxe feita para facilitar a escrita. Todas as classes são objetos e a herança se dá pro protótipos.

```
class Animal {
    constructor(type = 'animal') {
        this.type = type
    }

    get type() {
        return this._type
    }

    set type(val){
        this._type = val.toUpperCase()
    }

    makeSound(){
        console.log('Making animal sound')
    }
}

let a = new Animal()
console.log(a.type) //ANIMAL
```

```
class Cat extends Animal {
    constructor() {
        super('cat')
    }

    makeSound(){
        super.makeSound()
        console.log('Meow')
    }
}

let b = new Cat()
console.log(b.type) //CAT
```

