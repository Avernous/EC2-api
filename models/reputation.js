const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reputationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Reputation = mongoose.model('reputation', reputationSchema);
module.exports = Reputation;