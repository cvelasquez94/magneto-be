const express = require('express');
const app = express.Router();
const { verifiedData } = require('../services');

app.get('/', (req, res, err) => {
    res.send({status: 'Hola amigo!!!'})
});

app.post('/mutant',async (req, res) => {
    const { dna } = req.body;
    const result = verifiedData(JSON.parse(dna));
    const menssage = isMutan(result);
    res.status(201).send({
        menssage
    })
})

const isMutan = dna => dna.length > 0 ? `Es mutante se encontraron los patrones en su adn : ${dna} 👾` : `No es mutante!!! `;

module.exports = app;
