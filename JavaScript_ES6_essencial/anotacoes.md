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





