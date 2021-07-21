const poolSeeder = require('./pool.seeder');
const reputationSeeder = require('./reputation.seeder');




module.exports = function (){
    console.log("seeder.js")
    poolSeeder();
    reputationSeeder();
}


