const { Router } = require('express');
const { query } = require('mysql');
const router = Router();

const { createConnection } = require('../db.js')
const Connection = createConnection();

router.get('/drivers', (req, resp) => {
    Connection.query('SELECT Drivers2023T2.NameD, Drivers2023T2.Points, Teams.IdTeam, Teams.NameT FROM Drivers2023T2 INNER JOIN Teams ON Drivers2023T2.Team = Teams.IdTeam ORDER BY Drivers2023T2.Points DESC', (err, res) => {
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