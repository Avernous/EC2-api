const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const router = require("./routes/routes.js");
const seeder = require('./seeders/seeder.js');

const app = express();
const dbURI = "mongodb://localhost:27017/ec2";
const port = 3000;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => { 
        console.log('connected to DB');
        app.listen(port, () => {
            console.log(`Server Listening on Port: ${port}`);
        })
        console.log("starting Seeding: app.js");
        //drop then seed database
        //mongoose.connection.db.dropDatabase('ec2');
        //seeder();
    })
    .catch((err) => {
        console.log(err);
    } )

// options for generating documentation
const swaggerOptions = {
    swaggerDefinition:{
        info: {
            title: "EC2 - API",
            description: "data resource for Eclipse Phase 2",
            contact: {
                name: "Connor Fouks"
            },
            servers: ["http://localhost:3000/"],
        }
    },
    apis: ["./routes/*.js","app.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/v1', router)
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));





