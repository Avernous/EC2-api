const Pool = require('../models/pool.js');
const fs = require('fs');

module.exports = function (){
    console.log("-pool.seeder.js");
    let pools;
    try{
        let rawdata = fs.readFileSync('json/pools.json', 'utf8');
        pools = JSON.parse(rawdata);
    }
    catch(err){
        console.error(err);
    }

    try{
        Pool.insertMany(pools);
    }
    catch(err){
        console.error(err)
    }
};