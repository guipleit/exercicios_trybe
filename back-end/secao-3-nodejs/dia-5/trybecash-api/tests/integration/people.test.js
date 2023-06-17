const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const connection = require('../../db/connection');
const app = require('../../src/app');
const sinon = require('sinon');

chai.use(chaiHttp);

const expectedPeople = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];


describe('endpoints /people', () => {
  it('teste de cadastro de pessoa', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    const response = await chai.request(app).post('/people').send(expectedPeople[0]);
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ message: 'Pessoa cadastrada com sucesso com o id 42' });
    });

  it('testa listagem de todas as pessoas', async () => {
    sinon.stub(connection, 'execute').resolves(expectedPeople);
    const response = await chai.request(app).get('/people');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(expectedPeople);
  });

  it('testa listagem de uma pessoa pelo id', async () => {
    sinon.stub(connection, 'execute').resolves([[expectedPeople[0]]]);
    const response = await chai.request(app).get('/people/1');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(expectedPeople[0]);
    });

  it('testa alteração de uma pessoa pelo id', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai.request(app).put('/people/1').send(expectedPeople[0]);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ message: "pessoa de id 1 atualizada com sucesso" });
    });

  it('testa exclusão de uma pessoa pelo id', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai.request(app).delete('/people/1');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ message: "pessoa de id 1 excluída com sucesso" });
    });

    afterEach(sinon.restore);
});
