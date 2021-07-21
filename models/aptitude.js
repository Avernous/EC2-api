const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aptitudeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Aptitude = mongoose.model('aptitude', aptitudeSchema);
module.exports = Aptitude;