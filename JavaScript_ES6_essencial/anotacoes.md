## Introdução ao ES6
### História e conceitos
- Lançado em setembro de 1995;
- livespript para javascript;
- Criado por Brendan Eich;
- ECMAScript: ECMAintenational. Especificação da linguagem de programação. 
- TC39: Comitê responsável pela evolução do JavaScript. 

links:
https://github.com/tc39/proposals
https://babeljs.io
(tranforma um código novo em um código que pode ser lido por mais browsers)

### Conceitos da linguagem
- Linguagem interpretada
- Linguagem de tipagem fraca e dinâmica
(tipagem fraca - permite a soma de tipos diferentes)
(dinâmica - não precisa declarar o tipo de variável na hora da criação)
- [Typescript](https://typescriptlang.org/)
  - adiciona funcionalidades que o JS não tem por padrão.
- [Flow](https://flow.org/en/)
  - Mais simplificado que o Typescript
- Funções de primeira classe e ordem maior
- Closure ou escopo lexico, 
  - JS tem 3 tipos de escopo: global, bloco, função
- Currying, 
  - tecnica de transformar uma função com n parametros em apenas uma função com um unico parametro que vai retornando uma função.
- Hoisting, 
  - levantar ou suspender algo. Move as definições de variáveis e funções para o topo do escopo onde elas foram declaradas. 
  - Boa prática: Sempre declarar a função antes de utilizar.
- Imutabilidade
  - A variável nunca muda, se vc precisa criar outro você cria uma nova. 

## Tipos e variáveis
- var
  - pioneiro
  - var nameVar = "Guilherme"
  - sempre global ou de função, nao respeita de bloco
- let
  - respeita o escopo
- const
  - respeita o escopo
  - não permite que troque de valor
  - se criar um objeto pode trocar as propriedades dele

**Tipos**
- string: textos
- number
- boolean: true or false
- null
- undefined - a variavel existe mas nao tem valor ainda
- symbol - permite criar valores unicos
- object
- function - tbm é um objeto, mas permite que o objeto seja chamado
- array

**String**

- .length 
  - Qtd de caracteres de uma string
  - const textSize = 'Texto'.length
  - textSize = 5

- .split('x') 
  - Array com as posições separadas pelo delimitador
  - const splittedText = 'Texto'.split('x')
  - splittedText = ['Te', 'to']

- .replace('Text', 'txeT')
  - const replacedText = 'Texto'.replace('Text', 'txeT')
  - replacedText = txeTo

- .slice(começo, final) 
  - Retorna a fatia de um valor
  - const lastChar = 'Texto'.slice(-1)
  - lastChar = o


**Number**

- .toString()
  - Transformar numero para string
  - const numberAsString = myNumber.toString()
- myNumber.toFixed(2)
  - Retorna número com um número de casas decimais
  - const fixedTwoDecimals = myNumber.toFixed(2)
- parseFloat(13.22)
  - Transforma uma string em float
- parseInt
  - Transforma uma string em inteiro

**No JS só tem o tipo Number, nao faz diferença entre float e int**

**Null**
No console.log o null é sempre object

**object**
let user = {
  name: 'Guilherme'
}

// Alterando a propriedade de um obejto
user.name = 'Outro nome 1'
user['name'] = 'Outro nome 2'

const prop = 'name';
user[prop] = 'Outro nome 3'

//Criando uma propriedade
user.lastName = 'Cambrini da Silva';

//Deletando uma propriedade
delete user.name;

const user = {
  name: 'Guilherme'
  lastName: 'Cambrini da Silva'
}

// Recupera as chaves do objeto
console.log('Propriedadde do obj user: ', Object.keys(user))

// Recupera os valores das chaves do objeto
console.log('Valores das propriedades do objeto user:', Object.values(user))

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('Lista de propriedades e valores', Object.entries(user))

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Guilherme Cabrini da Silva'});
// Não é uma boa prática. O ideal é não mexer na referência
Object.assign{}, user, {age: 26}

// Previne todas as alterações em um objeto
const newObj =  {foo: 'bar'}
Object.freeze(newObj);
//Não irá fazer as alterações escritas
//Congela tudo

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Guilherme' }
Object.seal(person);
//nao permite que crie uma nova propriedade e nem delete uma propriedade existente

**Symbol**
Mesmo que possuam o mesmo valor, um símbolo nunca é igual ao outro

//Previnir conflito entre nomes de propriedades
//As propriedades não são sobrescritas
//Criam propriedades que nao sao enumberables
//Para aparecer usa-se:
Object.getOwnPropertySymbols(user)

**functions**
function fn()
{
  return 'Code here';
}

const arrowFn = () => 'Code here'
ou, se tiver mais de uma expressão
const arrowFn2 = () => {
  //outras expressões
  return 'Code here'
}

//Funções também são objetos e posso criar propriedades
fn.prop = 'Posso criar propriedades'

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam())

//Receber e retornar funções
const controlFnExec => fnParam => allowed => {
  if(allowed){
    fnParam();
  }
}

**Array**
Array também tem o atributo .length

//Verifica se é array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array
persons.forEach(person => {
  console.log('Nome: ${person.name}')
})

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('Nova lista apenas com homens:', mens);

//Retornar um novo
const personWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript'
})

//Transforma um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
},0);

## Operadores

- Aritméticos
- Atribuição
- Comparação
- Lógicos
- Spread

code runner //extenção do vscode

//Operador binário
Operando1 operardor Operando2
1 + 2

//Operador unário
Operando1 operador
operador Operando1

x++
++x

% Módulo - retorna o inteiro restante da divisão dos dois operandos

++ Incremento/ -- Decremento - soma / diminui 1
const a = ++2 
Incrementa o 2, que vira 3 e a recebe 3
const b = 2++
B recebe 2, Incrementa 2, B vira 3 após

//Negação e adição
-3
+"3" // retorna 3
+true // retorna 1 pq força a transformação de bool para number
+false // retorna 0
-true //retorna -1

//Operador de exponenciação
2 ** 3

//Operador de agrupamento
2 * (5 + 6) //fará 5 + 6 primeiro

Atribuição
x = y
x += y
x -= y
x *= y
x /= y

Igual ==
Não compara o tipo, apenas os valores
3 == '3'

Não igual !=
Nao compara o tipo. Verdadeiro caso os operandos não sejam iguais

Estritamente igual ===
Compara os tipos

Estritamente não igual !==
compara os tipos

maior que >
menor que <

maior ou igual >=
menor ou igual <=

// Ternário
condicao ? valor1 : valor2

true ? 'foo' : 'bar' //Retorna 'foo'
false ? 'foo' : 'bar' //Retorna 'bar'

AND &&
OR ||
NOT !

**Spread**
Concatenar arrays

delete something (Deleta)
typeof something (Retorna o tipo)

instaceof

## Estruturas condicionais e repetição
- if, else, else if

if(condition) //Se
{
  //code
}
else if(condition) //Se nao a anterior se
{
  //code
}
else //Se não
{
  //code
}

switch(fruit)
{
  case 'banana': console.log('R$ 3,00/kg')
                 break
  case 'mamao': console.log('R$ 5,00/kg')
                break
  default: "Nao temos essa fruta"
            break
}

For, while, do...while, for...in

continue, break

for(let i = 0; i < array.length, i++)
{
  //code 
}

while(n < 3)
{
  n++
  x+=n
}

do
{
  n++
  x+=n
}while(n < 3)

**for in e for of**

let arr = [3, 5, 7]
arr.foo = "Hello"

for(let i in arr)
{
  console.log(i) // logs 0, 1, 2, foo
}

for(let i of arr)
{
  console.log(i); //logs "3", "5", "7"
} //Executar o valor mesmo da array

**Continue e Break**
 - Break: sai da execução
 - Continue: Pula uma interação
























