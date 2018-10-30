const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    dna: {type: String},
    mutant:{type: Boolean} 
});

module.exports = mongoose.model('User', UserSchema);

