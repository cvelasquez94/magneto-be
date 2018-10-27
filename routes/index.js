const express = require('express');
const app = express.Router();
const { verifiedData } = require('../services');
const { handleError } = require('../utils');

app.get('/', (req, res) => {
    res.send({status: 'Hola amigo!!!'});
});

app.post('/mutant', (req, res) => {
    try{
        const { dna } = req.body;
        const result = verifiedData(JSON.parse(dna));
        const menssage = isMutan(result);
        res.status(201).send({
            menssage
        });
    } catch(error) {
        handleError(error, res);
    }
});

const isMutan = dna => dna.length > 0 ? 
    `Es mutante se encontraron los patrones en su adn : ${dna} 👾` : 'No es mutante!!!';

module.exports = app;
