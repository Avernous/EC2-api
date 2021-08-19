const express = require('express');
const router = express.Router();
const poolRouter = require('./pool.routes.js')
const reputationRouter = require('./reputation.routes')
// url: /api/v1


router.use('/', poolRouter);
router.use('/', reputationRouter);


module.exports = router;