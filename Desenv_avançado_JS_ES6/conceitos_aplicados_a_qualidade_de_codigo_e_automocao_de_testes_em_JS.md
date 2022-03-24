## Testes, TDD e BDD
- Testes automatizados
  - Testes unitários: papel de testar a menor unidade do seu código. 
  - Testes integrados: Testam a integração entre essas unidades.
  - Testes funcionais: Testa a integração do seu sistema com outros sistemas. Conhecido tbm como teste blackbox. Teste no frontend é como o usuário faria. 
- Testes manuais e automatizados
  - Testes usabilidade;
  - Testes de aceitação do usuário;
  - Protótipos;
  - Testes funcionais;
  - Exemplos;
  - Alpha e beta;
  - Mais...
- Ferramentas de teste
  - Teste de carga e performance;
  - Testes de segurança;
  - Mais...

### TDD ( Test Driven Development )
É um dos pilares do Extreme Proogramming, consiste em testar e refatorar em pequenos ciclos, onde você escreve o teste antes do código, faz o mesmo passar e refatora o código. 

Escrita do teste -> Escrita do código -> Refatoração

**Vantagens**
- Feedback rápido;
- Maior segurança em alterações e novas funcionalidades;
- Código mais limpo;
- Produtividade;

### BDD ( Behavior Driven Development )
Técnica de desenvolvimento ágil que visa integrar regras de negócio com linguagens de programação.

**Pilares**
- Testes;
- Documentação;
- Exemplos;

**Vantagens**
- Compartilhamento de conhecimento;
- Documentação dinâmica;
- Visão do todo.
  
## Conheça Mocha
Mocha - Ferramenta para executar os testes. Segue os padrões do BDD. 

const assert = require('assert');
const Math = require('../src/math.js');

describe('Descrição do que vc está testando', function(){
    it('Comportamento esperado da minha classe', function(){
        const math = new Math();
        
        assert.equal(math.sum(5, 5), 10)
        //verifica se com os parametros 5 e 5 retorna 10
    })
})

**Validação de assíncrona**
it('', function(done){

})

//Ele só conclui quando o done é invocado

Quando utiliza o Mocha o tempo max é 2000.
Para aumentar: this.timeout(3000);

**Não utilizar arrow function no mocha.**

it.only - vai executar apenas esse teste
it.skip - vai pular o teste e deixa-lo como pendente

hooks - Formas de executar código e evitar repetições
beforeEach(function() {
    value = 0;
})
antes de cada bloco essa função será chamada.

## Veja como trabalhar com Chai - Uma excelente biblioteca
O assert não é tão descritivo. Para isso a gente pode utilizar a bibliote chai que é uma ferramenta de asserts. Deixando os testes mais descritivos.
const expect = require('chai').expect;

expect(value).to.equal(10);
expect(math.multiply(value, 5)).to.equal(0);
expect(obj).to.have.property('name').equal('Celso');
expect(obj).to.deep.equal(obj2);

[Chai Assertion Library](https://www.chaijs.com/api/bdd/)


## Desenvolvendo códigos com Sinon
const sinon = require('sinon')

Mocha funções e observar se elas foram invocadas.

it.only('Calls req with sum and index values', function(){
    const req = {}
    const res = {
        load: sinon.spy()
    };
    const math = new Math();

    math.printSum(req, res, 5, 5);

    expect(res.load.calledOnce).to.be.true;
    // verificar arumentos
    expect(res.load.args[0][1]).to.equal(10);
})
