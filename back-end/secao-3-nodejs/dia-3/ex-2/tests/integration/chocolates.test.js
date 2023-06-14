const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const sinon = require('sinon');
const fs = require('fs').promises;

const app = require('../../src/app');

const mockCacauTrybe = JSON.stringify({
    "brands": [
        {
            "id": 1,
            "name": "Lindt & Sprungli"
        },
        {
            "id": 2,
            "name": "Ferrero"
        },
        {
            "id": 3,
            "name": "Ghirardelli"
        }
    ],
    "chocolates": [
        {
            "id": 1,
            "name": "Mint Intense",
            "brandId": 1
        },
        {
            "id": 2,
            "name": "White Coconut",
            "brandId": 1
        },
        {
            "id": 3,
            "name": "Mon Chéri",
            "brandId": 2
        },
        {
            "id": 4,
            "name": "Mounds",
            "brandId": 3
        }
    ]
});

const output = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];

describe('Usando o método GET em /chocolates', function () {
    beforeEach(function () {
        sinon.stub(fs, 'readFile').resolves(mockCacauTrybe);
    });

    afterEach(function () {
        sinon.restore();
    });
    
    it('Retorna a lista completa de chocolates!', async function () {
        const response = await chai
            .request(app)
            .get('/chocolates');
        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal(output);
    });
});

describe('Usando o método GET em /chocolates:id, buscando o ID 4', function () {
    beforeEach(function () {
        sinon.stub(fs, 'readFile').resolves(mockCacauTrybe);
    });

    afterEach(function () {
        sinon.restore();
    });
    
    it('Retorna o chocolate com ID 4!', async function () {
        const response = await chai
            .request(app)
            .get('/chocolates/4');
        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal(output[3]);
    });
});

describe('Usando o método GET em /chocolates:id, buscando o ID 99', function () {
    beforeEach(function () {
        sinon.stub(fs, 'readFile').resolves(mockCacauTrybe);
    });

    afterEach(function () {
        sinon.restore();
    });
    
    it('Retorna o status 404!', async function () {
        const response = await chai
            .request(app)
            .get('/chocolates/99');
        expect(response).to.have.status(404);
    });
});

describe('Usando o método GET em /chocolates/brandId para buscar o id 1', function () {
    beforeEach(function () {
        sinon.stub(fs, 'readFile').resolves(mockCacauTrybe);
    });

    afterEach(function () {
        sinon.restore();
    });
    
    it('Retorna a lista de chocolates da marca Lindt & Sprungli', async function () {
        const response = await chai
            .request(app)
            .get('/chocolates/brand/1');
        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal([output[0], output[1]]);
    });
});