const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    uses: [{ name: String, description: String }]
});

const Pool = mongoose.model('Pool', poolSchema);
module.exports = Pool;