const express = require('express');
const router = express.Router();
const poolRouter = require('./pool.routes.js')
// url: /api/v1


router.use('/', poolRouter);


module.exports = router;