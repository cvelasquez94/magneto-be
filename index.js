const app = require('./app');
const mongoose = require('mongoose');
const { mongoUrl } = require('./config');
const PORT = process.env.PORT || 8000;

mongoose.Promise = global.Promise;

const start = async () => {
    await mongoose.connect(mongoUrl);
    app.listen(PORT, () => {
        console.log(`Server running at port: ${PORT}`);
    });
};

start();

module.exports = app;
