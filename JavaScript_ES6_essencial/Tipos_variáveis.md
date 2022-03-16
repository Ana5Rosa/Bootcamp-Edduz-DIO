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