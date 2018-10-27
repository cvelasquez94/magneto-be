const test = require('ava');
const request = require('supertest');
const server = require('../index');
const dna1 = [
    'ATGCGA',
    'CAGTGC',
    'TTATGT',
    'AGAAGG',
    'CCCCTA',
    'TCACTG'
];

test('check status', async (t) => {
    const res = await request(server).post('/api/mutant').send({dna: JSON.stringify(dna1)});
    t.is(res.status, 201);
});
