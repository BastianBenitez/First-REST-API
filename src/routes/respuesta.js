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
    Connection.query('SELECT  Teams.IdTeam, Drivers2023T2.NameD, Teams.NameT,Teams.PointsT FROM Drivers2023T2 INNER JOIN Teams ON Drivers2023T2.Team = Teams.IdTeam ORDER BY PointsT DESC;', (err, res) => {
        if (err) {
            console.log(err);
        } else {
            const groupedData = {};

            res.forEach(item => {
            const teamId = item.IdTeam;
            if (!groupedData[teamId]) {
                groupedData[teamId] = {
                IdTeam: teamId,
                NameT: item.NameT,
                PointsT: item.PointsT,
                NameB: [item.NameD],
                };
            } else {
                groupedData[teamId].NameB.push(item.NameD);
            }
            });

            const result = Object.values(groupedData);
            result.sort((a, b) => b.PointsT - a.PointsT);
            console.log(result);
            resp.json(result);
        }
    });
});

module.exports = router;