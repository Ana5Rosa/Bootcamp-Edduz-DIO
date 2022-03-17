Professor: Celso Henrique da Silva

## Arrow Functions

**Maneira clássica de escrever uma função:**
function nome(parametros)
{
    //código da função
}

**Funcoes anonimas**
Tem seu nome omitido, tendo que estar ligadas a uma variável ou como parametro de uma função.

**Arrow Functions surgiu no ES6**
- São funções anônimas e seguem as mesmas regras.
- Podemos omitir a palavra function
- Podemos omitir o return caso o lado direito seja apenas uma expressão
- Se não for expressão, do lado direito temos que por chaves
- Se eu tiver apenas um parametro na minha função eu posso deixar de escrever os parentes

var sum = (a, b) => a + b;
console.log(sum(5, 15));

var operador = (a, b, c) => { 
    if(a === '+'){ return b + c }
    else if(a === '-'){ return b - c } }
console.log(operador('+', 5, 4))
// 9
undefined
console.log(operador('-', 5, 4))
// 1

- Para retornar um obj literal tem que por parente em volta das chaves

var createObj = () => ({ test: 123 })
console.log(createObj())

- A Arrow Function não funciona o hoisting;

- Possui o contexto igual ao que envolve ele.
.bind - fixa o contexto da função independente de onde ela foi invocada. 
Ou salvava-se o contexto em uma variável; 
Com Arrow function é só declarar ela e vai se ter certeza que o this é fixo. 

## Default function arguments
Quando não se passa um valor para um parametro o valor é undefined. 
Antes usava-se: b = b || 1;
Então caso o b fosse undefined ele valeria 1. 
O problema é que se o valor de b fosse 0 cairia nesse || e viraria 1.
b = typeof b === 'undefined' ? 1 : b

Com o ecma6 posso atribuir valores padrões sem tantas validações

function multiply(a, b = 1) {
    return a * b;
}

let teste = (a, b = 1) => a*b
console.log(teste(5, 4))

Eu posso dizer tbm que caso o b seja undefined ele terá o valor de a:

let teste = (a, b = a) => a*b
console.log(teste(4))

**Atenção a ordem** - não posso referenciar antes do parametro ser definido;

function randomNumber() {
    return Math.random() * 10;
}

function multiply(a, b = randomNumber())
{
    return a*b
}

console.log(multiply(5))

## Enhanced Object Literals
Maneira classica:

var obj = {
    prop1: 'Digital Innovation One'
}

var carro = 'Charrete'
undefined
var obj = { carro }
undefined
obj
{carro: 'Charrete'}

var obj = {
    sum(a, b) {
        return a + b;
    }
}

console.log(obj)

  






