## Symbols e Interators
Maneira de gerar um identificador unico
Que não pode ser adivinhado, nem descrito

const uniqueID = Symbol();
console.log(uniqueId);

**Pode passar um valor para o Symbol, que serve unicamente para funções de debug, mas nao está ligadoa o Symbol**
2 Symbol com mesmo valor nao são iguais

const uniqueId2 = Symbol('Hello');

**Não chega a ser uma propriedade privada, mas é uma forma de deixar claro para outros desenvolvedores que é uma propriedade que ele nao deve mecher**

const obj = {
    [uniqueId]: 'Hello'
};
console.log(obj)

**Propriedades well known symbols**
- Symbol.iterator 
  - Uma interface para você consumir passo a passo uma lista de uma estrutura de dados
Symbol.split
Symbol.toPrimitive

const arr = [1, 2, 3, 4]
const it = arr[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

**Para os que já possuem a propriedade iterator**
const arr = [1, 2, 3, 4]
const str = 'Digital Innovation One'

for (let value of str) {
    console.log(value)
}

**Construir função iteradora em um objeto**


const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        
        return {
            next: () => {
                i++ 

                return {
                    value: this.value[i],
                    done: i > this.values.length
                }
            }
        }
    }
}

const it = obj[Symbol.iterator]()

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

## Aprenda sobre Generators e onde utilizá-los
Pausar uma funçao

function hello() {
    console.log('Hello');
    yield 1; //Passar um valor para sua interação

    console.log('From');
    yield

    console.log('Function');
}

const it = hello()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

**Posso utilizar generators para construir iterators**
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for(var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}

for (let value of obj) {
    console.log(value);
}
