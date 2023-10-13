const { Router } = require('express');
const { query } = require('mysql');
const router = Router();

const { createConnection } = require('../db.js')
const Connection = createConnection();

router.get('/drivers', (req, resp) => {
    Connection.query('SELECT * from Drivers2023T2 ORDER BY Points DESC', (err, res) => {
        if (err) {
            console.log(err);
        } else {
            resp.json(res);
        }
    });
});

router.get('/teams', (req, resp) => {
    Connection.query('SELECT * from Teams ORDER BY Points DESC', (err, res) => {
        if (err) {
            console.log(err);
        } else {
            resp.json(res);
        }
    });
});

module.exports = router;