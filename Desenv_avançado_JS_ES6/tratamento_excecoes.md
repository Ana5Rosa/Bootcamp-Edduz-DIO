## Como identificar os erros
Assim que um erro é estourado ele para a execução de todo o código. 
Uma maneira é usar o Catch para descobrir qual é o erro e nao parar a execução;

## Debugging parte 1
Aba network do development tools.
403 - problema com o arquivo, nao foi adicionado ao servidor

## Debbugging parte 2
No console indica a linha do erro

Colocar um breakpoint para congelar o código antes do erro.

console.log(); 
console.warn(); - Já vem com o fundo amarelo e !
console.erro(); - Já vem com o fundo vermelho e erro
console.trace(); - Traz informações de onde nosso código foi executado

console.group('Meu grupo');
cosole.log('teste');
console.log('teste');
console.egroupEnd('My group');

console.time('Log Time');
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000)

console.table(['item 1', 'item 2'])

console.assert(1 === 1, 'ops')
só aparece se a condição for falsa

console.log('%c styled log', 'color: blue; font-size: 40px')