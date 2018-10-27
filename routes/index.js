const express = require('express');
const app = express.Router();

app.get('/', (req, res, err) => {
    res.send({status: 'Hola amigo!!!'})
});

module.exports = app;
