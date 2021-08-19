const express = require('express');
const router = express.Router();
const Reputation = require('../models/reputation');
// url: /api/v1/pools

 /**
  * @swagger
  *     /api/v1/pools:
  *     get:
  *         description: Used to request all pools
  *         responses:
  *             '200':
  *                 description: A successful respone
  */
router.get('/reputations', (req, res) => {
    Reputation.find((err, results) => {
        if(err){
            console.log(err.name);
            res.sendStatus(500);
        }
        else{
            res.json(results)
        }
    })
});

 /**
  * @swagger
  *     /api/v1/pools/:id:
  *     get:
  *         description: Used to request all pools
  *         responses:
  *             '200':
  *                 description: A successful respone
  */
router.get('/reputations/:id', (req, res) => {
    Reputation.findById(req.params.id, (err, results) => {
        if(err){
            if(err.name === "CastError"){
                res.sendStatus(400);
            }
            else{
                res.sendStatus(500);
            } 
        }
        else{
            res.json(results);
        }
    })

});


module.exports = router;