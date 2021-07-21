const poolSeeder = require('./pool.seeder');
const reputationSeeder = require('./reputation.seeder');
const aptitudeSeeder = require('./aptitude.seeder');




module.exports = function (){
    console.log("seeder.js")
    poolSeeder();
    reputationSeeder();
    aptitudeSeeder();
}


