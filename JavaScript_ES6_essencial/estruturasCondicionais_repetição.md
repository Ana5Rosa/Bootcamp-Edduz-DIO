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
