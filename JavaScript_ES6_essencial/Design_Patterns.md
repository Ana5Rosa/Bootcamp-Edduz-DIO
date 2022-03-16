## Design Patterns 
Ou padrões de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.

Formato de um pattern
- Nome
- Exemplo
- Contexto
- Problema
- Solução

Tipos
- Padrões de Criação
  - Abstraem e ou adiam o processo criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados. 
    - Abstract Factory
    - Builder
    - Factory Method
    - Prototype
    - Singleton
- Padrões Estruturais
  - Se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores
    - Adapter
    - Bridge
    - Composite
    - Decorator
    - Facade
    - Business Delegate
    - Flyweight
    - Proxy
- Padrões Comportamentais
  - Se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padões de objetos ou de classes, mas também os padrões de comunicação entre os objetos.
    - Chain of Responsibility
    - Command
    - Interpreter
    - Iterator
    - Mediator
    - State
    - Strategy
    - Template Method
    - Visitor
- Patterns mais utilizados
  - Factory
    - Funções que retornam um objeto, sem a necessidade de chamálas com o new, são consideradas funções Factory(Fábrica).
  - Singleton
    - Criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la
    - [JQuery](https://jquery.com/)
  - Decorator
    - Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente
    - [proposal-decorators](https://github.com/tc39/proposal-decorators)
    - [TypeScript](https://www.typescriptlang.org/docs/handbook/decorators.html)
  - Observer
    - Muito popular em aplicações JS. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.
    - [vue](https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js#L229)
    - [RxJS](https://rxjs-dev-firebaseapp.com/guide/observable)
  - Module
    - Possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais
