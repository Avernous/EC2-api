const express = require('express');
const router = express.Router();
const Aptitude = require('../models/aptitude');
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
router.get('/aptitudes', (req, res) => {
    Aptitude.find((err, results) => {
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
router.get('/aptitudes/:id', (req, res) => {
    Aptitude.findById(req.params.id, (err, results) => {
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