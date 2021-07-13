const express = require('express')
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = 3000;
// options for generating documentation
const swaggerOptions = {
    swaggerDefinition:{
        info: {
            title: "EC2 - API",
            description: "data resource for Eclipse Phase 2",
            contact: {
                name: "Connor Fouks"
            },
            servers: ["http://localhost:3000"],
        }
    },
    apis: ["app.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
app.get('/customers', (req, res) => {
    res.send('Customer Results')
})

app.listen(port, () => {
    console.log(`Server Listening on Port: ${port}`);
})