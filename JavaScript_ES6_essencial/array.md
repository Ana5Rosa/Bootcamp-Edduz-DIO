
## Criar uma Array

const arr = [1, 2, 3];
ou
const arr2 = new Array(1, 2, 3);

Array.of
Cria uma nova instância de array a partir do número de parâmetros informados
const arr = Array.of(1, 2, 3);

const persons = Array.of('John', 'Cris', 'Jenny')
const numberAndStrings = Array.of(1, 2, 'strings', 'texto')

Array(3) - cria um array com 3 posições vazias
Array(3,2) - cria igual o array.of

Array.from
Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object

const divs = document.querySelectorAll('div')
const arr = Array.from(divs)

## Inserir e remover elementos
- push
  - Adiciona um ou mais elementos no final do array e retorna o tamanho do novo array
const frutas = ['Bananas', 'Melancia', 'Mamão']
// undefined
frutas
//(3) ['Bananas', 'Melancia', 'Mamão']
frutas.push('laranja')
//4
frutas
//(4) ['Bananas', 'Melancia', 'Mamão', 'laranja']

- pop
  - Remove o último elemento de um array e retorna o elemento removido

- unshift
  - Adiciona um ou mais elementos no ínicio do array e retorna o tamanho do novo array

- shift
  - Remove o primeiro elemento da Array e retorna o elemento removido

- concat
  - Concatena um ou mais arrays retornando um novo array

const frutas = ['Bananas', 'Melancia', 'Mamão']
//undefined
const animais = ['Macaco', 'Leão', 'Carro']
//undefined
const merge = frutas.concat(animais)
//undefined
merge
//(6) ['Bananas', 'Melancia', 'Mamão', 'Macaco', 'Leão', 'Carro']

- slice
  - Retorna um novo array "fatiando" o array de acordo com início e fim

const animais = ['Macaco', 'Leão', 'Carro']
undefined
animais.slice(0,1)
['Macaco']
animais.slice(0,2)
(2) ['Macaco', 'Leão']
animais.slice(1,2)
['Leão']
animais.slice(0,3)
(3) ['Macaco', 'Leão', 'Carro']
animais.slice(-1)
['Carro']
animais.slice(-3)
(3) ['Macaco', 'Leão', 'Carro']
animais.slice(1)
(2) ['Leão', 'Carro']

- splice
  - Altera um array adicionando novos elementos enquanto remove elementos antigos
  - (a partir do item, quantos remover, qual acrescentar)

const animais = ['Macaco', 'Leão', 'Carro']
undefined
animais.splice(2)
['Carro']
animais
(2) ['Macaco', 'Leão']
animais.splice(2, 3, 'Jiboia')
[]
animais
(3) ['Macaco', 'Leão', 'Jiboia']
animais.splice(0,2, 'Canguru')
(2) ['Macaco', 'Leão']
animais
(2) ['Canguru', 'Jiboia']
animais.splice(1, 0, 'Leao', 'Cachorro')
[]
animais
(4) ['Canguru', 'Leao', 'Cachorro', 'Jiboia']
animais.splice(1, 3, 'Canguru', 'Canguru')
(3) ['Leao', 'Cachorro', 'Jiboia']
animais
(3) ['Canguru', 'Canguru', 'Canguru']

## Iterar elementos
- forEach
  - Iteração de cada item dentro de um array
  - arr.forEach(value, index)
- map
  - Retorna um novo array, de mesmo tamanho, iterando cada item de um array
- flat
  - Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth)

const array = [1, 3, 5, 7, 9, [4, 8, 12, 16, [2, 6, 10, 14]]]
undefined
array
(6) [1, 3, 5, 7, 9, Array(5)]
array.flat()
(10) [1, 3, 5, 7, 9, 4, 8, 12, 16, Array(4)]
array
(6) [1, 3, 5, 7, 9, Array(5)]
array.flat(2)
(13) [1, 3, 5, 7, 9, 4, 8, 12, 16, 2, 6, 10, 14]

- flatMap
  - Retorna um novo array assim como a função map e executa um flat de profundidade 1

- keys
  - Retorna um Array Iterator que contém as chaves para cada elemento do array

- values
  - Retorna um Array Iterator que contém os valores para cada elemento do array

- entries
  - Retorna um array iterator que contém os pares chave/valor para cada elemento do array

- find
  - Retorna o primeiro item de um array que satisfaz a condição

const find = [1, 2, 3, 4, 5]
//undefined
const encontrou = find.find(value => value > 2)
//undefined
console.log(encontrou)
//3

- findIndex
  - Retorna o índice do primeiro item de um array que satisfaz a condição

- filter
  - Retorna um novo array com todos os elementos que satisfazem a condição
const maior_3 = find.filter(value => value > 3)
undefined
console.log(maior_3)
VM2897:1 (2) [4, 5]

- indexOf
  - Retorna o primeiro índice em que um elemento pode ser encontrado no array
- lastIndexOf 
  - Retorna o ultimo índice em que um elemento pode ser encontrado no array

- includes 
  - Retorna um booleano verificando se determinado elemento existe no array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
undefined
const hasItem1 = array.includes(1);
undefined
console.log(hasItem1)
VM3141:1 true
undefined
const hasLetraA = array.includes('a')
undefined
console.log(hasLetraA)
false

- some
  - Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
  const number_par = numbers.some(value => value % 2 === 0)
  undefined
  console.log(number_par)
  true

- every
  - Retorna um booleano verificando se todos os itens satisfazem a condição

- sort 
  - Ordena os elementos de um array de acordo com a condição
  - numbers.sort((current, next) => next - current)
(9) [9, 8, 7, 6, 5, 4, 3, 2, 1]

- Reverse
  - Inverte os elementos de um array

- join
  - junta todos os elementos de um array, separados por um delimitador e retorna uma string
  numbers.join(',')
'9,8,7,6,5,4,3,2,1'

- Reduce
  - Retorna um novo tipo de dado iterando cada posição de um array
  - nome_da_array.reduce((total, value) => total += value, 0)
  - total é o que irá retornar, 0 é o tipo