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