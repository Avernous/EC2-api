const mongoose = require('mongoose');
const schema = mongoose.Schema;

const weaponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})