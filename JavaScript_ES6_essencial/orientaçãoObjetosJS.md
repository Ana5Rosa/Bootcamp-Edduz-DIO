## Orientação a objetos no JavaScript
- Herança: 
  - baseada em protótipos
  - prototype
  - _proto_
  - constructor
    - Baseado em um constructor é criado um prototype e nessa variável a gente armazena a referencia dela no _proto_
    - Toda função construtora tem um _proto_ ligada a ela
    - F Animal.constructor aponta para o function que aponta para o Function.prototype.constructor que aponta para o F Object() {} que aponta para o Object.prototype = null
- Classes:
  - Veio no ES6
  - Simplificação da herança de protótipos
  - palavra chave class
- Modificadores de acesso
  - O JavaScript nao tem
  - Controle do que é privado e do que é publico dentro da classe
  - é o # que indica que é privado
- Encapsulamento
  - Ocultar detalhes do funcionamento interno
- Static
  - Acessar métodos/atributos sem instanciar uma determinada class
