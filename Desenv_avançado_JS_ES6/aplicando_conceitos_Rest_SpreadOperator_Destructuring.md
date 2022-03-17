## Conheça Rest e Spread Operator

arguments se refere a todos os argumentos da função
rest operator - ...

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(5, 5, 5, 2, 3))

Quando utilizamos arrow functions o arguments é inacessível. Então usamos assim:

const sum = (...rest) => {
    
};

Tbm podemos pegar uma qtd de argumentos iniciais e o restante formar uma array 

const soma = (a, b, ...rest) => {
    console.log(a, b, rest)
}
//undefined
console.log(soma(5, 5, 5, 2, 3))
// 5 5 (3) [5, 2, 3]

Spread Operator -
Pega todos os itens do array e transformar em parametros da função

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
    return multiply(...rest)
}

console.log(sum(5, 5, 5, 2, 3))

Pode ser utilizado em strings, arrays, literal objects e objetos iteraveis.

const str = 'Digital Innovation One'

function LogArgs(...args){
    console.log(args);
}

LogArgs(...str);
//(22) ['D', 'i', 'g', 'i', 't', 'a', 'l', ' ', 'I', 'n', 'n', 'o', 'v', 'a', 't', 'i', 'o', 'n', ' ', 'O', 'n', 'e']

const str = 'Digital Innovation One'
const arr = [1, 2, 3, 4]

function logArgs(a, b, c){
    console.log(a, b, c);
}

const arr2 = [5, 6, 7, ...arr]

console.log(arr2);

Ao Mesclar objetos a ordem é importante para definir quais objetos vão prevalecer

const obj = {
    test: 123
}

const obj2 = {
    test: 456
}

const objMerged = {
    ...obj,
    ...obj2
}

console.log(objMerged)
// 456

Utiliza-se tbm para criar clones dos objetos

const obj = {
    test: 123
}

const obj2 = { ...obj }

obj2.test = 456
console.log(obj)

## Como usar Destructuring em ReactJS
var arr = ['Apple', 'Banana', 'Orange']

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]

**Usando Destructuring**
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];

console.log(apple, apple2)

**Se eu tiver uma array dentro de uma array**
var arr = ['Apple', 'Banana', 'Orange', ['Tomato', 'Stranwberry'] ]

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]
var tomato = arr[3][0]
var strawberry = arr[3][1]

**Usando Destructuring**
var [apple2, banana2, orange2, [tomato2, strawberry2]] = ['Apple', 'Banana', 'Orange', ['Tomato', 'Stranwberry'] ];

console.log(tomato, tomato2, straberry, straberry2)

**Pode ser usado com objetos**
var obj = {
    name: 'Celso'
}

var name = obj.name;

**Usando Destructuring**
var {name} = obj;
console.log(name);

**Se eu quiser que o nome da variável nao seja igual ao nome da propriedade eu posso:**
var {name: name2} = obj

**Ao alterar a variavel nao mexemos no objeto**
name2 = 'Henrique'

**Aplicar um destructuring dentro do props de um objeto**
var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
}

var { props: { age: age2, favoriteColors: [color1, color2] } } = obj
console.log(color1)

**Objeto em array**
var arr = [{name: 'Apple', type: 'fruit'}]
var [{name: fruitName}] = arr;
console.log(fruitName)

**Destructuring no parametro da função**
function sum([a, b] = [0, 0]) {
    return a + b
}

console.log(sum([5,5]))

Os 0 são default values, caso chame a função sem nada;

