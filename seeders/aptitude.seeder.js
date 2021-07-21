const Aptitude = require('../models/aptitude.js');
const fs = require('fs');

module.exports = function (){
    console.log("-aptitude.seeder.js");
    let pools;
    try{
        let rawdata = fs.readFileSync('json/aptitude.json', 'utf8');
        json = JSON.parse(rawdata);
    }
    catch(err){
        console.error(err);
    }

    try{
        Aptitude.insertMany(json);
    }
    catch(err){
        console.error(err)
    }
};