const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const router = require("./routes/routes.js");

const app = express();
const dbURI = "mongodb://localhost:27017";
const port = 3000;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => { 
        console.log('connected to DB');
        app.listen(port, () => {
            console.log(`Server Listening on Port: ${port}`);
        })
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
    apis: ["app.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/v1', router)
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes


 /**
  * @swagger
  *     /weapons:
  *     get:
  *         description: Used to request all Customers
  *         responses:
  *             '200':
*                   description: A successful respone
  */


