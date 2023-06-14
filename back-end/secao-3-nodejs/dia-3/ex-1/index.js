const { expect } = require('chai');
const retornaAprovação = require('./funcUtils');

describe('Testando a função retornaAprovação', function() {
    const respostaAprovado = retornaAprovação(7);
    it('Deve retornar "Aprovado"', function() {
        expect(respostaAprovado).to.equal('Aprovado');
    }
    );
    const respostaReprovado = retornaAprovação(6);
    it('Deve retornar "Reprovado"', function() {
        expect(respostaReprovado).to.equal('Reprovado');
    }
    );

});