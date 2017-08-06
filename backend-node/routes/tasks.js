const express = require('express');
const router = express.Router();

/* GET tasks listing. */
router.get('/', function(req, res, next) {
    req.getConnection(function(err,conn){
        if (err) return next("Cannot Connect");
        conn.query('SELECT * FROM task', function(err,rows) {
            if(err){
                console.log(err);
                res.status(400).send('MySQL error');
            }
            res.send(JSON.stringify(rows));
        });

    });
});

module.exports = router;
