const Reputation = require('../models/reputation.js');
const fs = require('fs');

module.exports = function (){
    console.log("reputation.seeder.js");
    let pools;
    try{
        let rawdata = fs.readFileSync('json/reputation.json', 'utf8');
        json = JSON.parse(rawdata);
    }
    catch(err){
        console.error(err);
    }

    try{
        Reputation.insertMany(json);
    }
    catch(err){
        console.error(err)
    }
};