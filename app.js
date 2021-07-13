const express = require('express')
const app = express();

const port = 3000;

//Routes
app.get('/customers', (req, res) => {
    res.send('Customer Results')
})

app.listen(port, () => {
    console.log(`Server Listening on Port: ${port}`);
})