## Callbacks e Promises

**Estrutura de uma callback**
function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First Data');
    }, 1000);
}

Tratar o erro:

try {

} catch (err) {

}

Ficava muito confuso quando precisa tratar os erros!

**Escrever uma Promises:**
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('First Data');
    }, 1000);

});

const doOtherthingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('Second Data');
    }, 1000);

});

doSomethingPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));

**3 estados da promises**
- pending - em execução
- fulfilled - terminou de executar
- rejected - deu algum erro

**Chamando uma outra promise depois da promise**
doSomethingPromise
    .then(data => {
        console.log(data);
        return doOtherThingPromise;})
    .the(data2 => console.log(data2))
    .catch();

**Transformando elas em função**
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('First Data');
        }, 1000);

    });

const doOtherthingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('Second Data');
        }, 1000);

    });

doSomethingPromise()
    .then(data => {
        console.log(data);
        return doOtherthingPromise();
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error));
    //O catch trata o erro de ambas as promises

**Promise ocorrendo em paralelo**
Promise.all([doSomethingPromise(), doOtherthingPromise()]).then((data) => {
    console.log(data);
}).catch(err => {
   console.log('Ops', error)); 
})

**A promise que for resolvida primeiro será executada**
Promise.race([doSomethingPromise(), doOtherthingPromise()]).then((data) => {
    console.log(data);
}).catch(err => {
   console.log('Ops', error)); 
})

## Fetch, Async/Await e EventEmitter
Fetch - Fazer requisições utilizando promises
fetch('/data.jason').then(responseStream => {
    console.log(responseStream)
})

O catch pega se houver um erro de rede

**Para saber o status**
fetch('http://localhost:8080/dataXPTO.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request Error');
        }
})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Error: ', err);
    })

**A partir do ES7 surgiu o Async/Await**
const simpleFunc = async () => {
    return 12345;
}

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

Tranforma uma função em uma promise

**Await espera que uma promise seja resolvida**
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async() => {
    const data = await asyncTimer();
    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

## Aplicando e praticando os conceitos
EventEmitter - Exclusivo do node

tem que exportar a class primeiro:
const EventEmitter = require('events');]
const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
})

emitteremit('User logged', { user: 'Celso Henrique' });

