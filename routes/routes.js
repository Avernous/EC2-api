const express = require('express');
const router = express.Router();
// url: /api/v1
router.get('/weapons', (req, res) => {
    res.send('Weapon Result')
})


module.exports = router;