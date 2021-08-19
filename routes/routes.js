const express = require('express');
const router = express.Router();

const poolRouter = require('./pool.routes.js')
const reputationRouter = require('./reputation.routes')
const aptitudeRouter = require('./aptitude.routes')
// url: /api/v1


router.use('/', poolRouter);
router.use('/', reputationRouter);
router.use('/', aptitudeRouter);


module.exports = router;