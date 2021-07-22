const express = require('express');
const router = express.Router();
const Pool = require('../models/pool.js');
const Aptitude = require('../models/aptitude.js');
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
router.get('/pools', (req, res) => {
    Pool.find()
        .then((result) => {
            res.json(result)
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
router.get('/pools/:id', (req, res) => {
    const input = req.params.id;
    console.log(input);
    Pool.findById("dfasdfasdf")
    .then((result) => {
        console.log(result);
        if(!result){
            return res.status(404).end();
        }
        else{
            return res.json(doc);
        }

    }).catch(() => {
        res.statusCode = 404;
    });

});

router.post('/pools', (req, res) => {
    const input = {
        name: "ballz",
        uses:[
            {
                name: "loremipsumloremipsum",
                descripiton: "loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum"
            }
        ]
    }
    Pool.Save(input)
    .then((result) => {
        console.log(result);
        return res.json(result);

    }).catch(() => {
        res.statusCode = 404;
    });

});


module.exports = router;