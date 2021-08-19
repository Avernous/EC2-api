const chai = require('chai');
const chaiHttp = require('chai-http');
let server = require('../app.js');
const Pool = require('../models/pool');
const Pools = require('../models/pool')


//assertion style
chai.should();

chai.use(chaiHttp);


describe("Get /reputations", () => {
    describe("/reputations",() => {
        it("Https Code 200 OK and Json format", (done) => {
            chai.request(server)
                .get("/api/v1/reputations")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.json;
                    done();
                })
        })
    })

    describe("/reputations/:id",() => {
        it("Https Code 200 OK and Json format", (done) => {
            
            //this uses a static id, this will fail if the database is re-initilized 
            chai.request(server)
                .get("/api/v1/reputations/60fb521665e686605c12916a")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.json
                    done();
                })
        })
    })
})