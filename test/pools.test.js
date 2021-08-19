const chai = require('chai');
const chaiHttp = require('chai-http');
let server = require('../app.js');


//assertion style
chai.should();

chai.use(chaiHttp);


describe("Get /pools", () => {
    describe("/pools",() => {
        it("Https Code 200 OK and Json format", (done) => {
            chai.request(server)
                .get("/api/v1/pools")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.json;
                    done();
                })
        })
    })

    describe("/pools/:id",() => {
        it("Https Code 200 OK and Json format", (done) => {
            
            //this uses a static id, this will fail if the database is re-initilized 
            chai.request(server)
                .get("/api/v1/pools/60fb521665e686605c129157")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.json
                    done();
                })
        })
    })
})