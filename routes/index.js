const express = require('express');
const app = express.Router();
const { verifiedData } = require('../services');
const { handleError } = require('../utils');
const  UserSchema  = require('../models');
app.get('/', (req, res) => {
    res.send({status: 'Hola amigo!!!'});
});

app.post('/mutant', async (req, res) => {
    try{
        const { firstName, lastName, email, dna } = req.body;
        console.log(req.body)
        const result = verifiedData(JSON.parse(dna));
        const menssage = isMutan(result);
        const u = new UserSchema({
            firstName,
            lastName,
            email,
            dna: JSON.parse(dna),
            mutant: !!result.length
        });
        const user = await u.save();
        res.status(201).send({
            menssage,
            user
        });
    } catch(error) {
        console.log(error)
        handleError(error, res);
    }
});

app.get('/users', async (req, res) => {
    const users = await UserSchema.find();
    res.status(201).json(users);
})


const isMutan = dna => dna.length > 0 ? 
    `Es mutante se encontraron los patrones en su adn : ${dna} 👾` : 'No es mutante!!!';

module.exports = app;
