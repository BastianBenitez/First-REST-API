const { Router } = require('express');
const router = Router();

const mysql = require('mysql');
require('dotenv').config()

const conexion = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD
});

conexion.connect((err, res)=>{
    if(err){
        console.log(err)
        console.log('Conection fail with DataBase')
    }else{
        console.log('DataBase is on')
    }
});

router.get('/drivers', (req, resp) => {
    conexion.query('SELECT * from Drivers2023T2 ORDER BY Points DESC', (err, res)=>{
        if(err){
            console.log(err)
        }else{
            resp.json(res)
        }
    })
    
})

router.get('/teams', (req, resp) => {
    conexion.query('SELECT * from Teams ORDER BY Points DESC', (err, res)=>{
        if(err){
            console.log(err)
        }else{
            resp.json(res)
        }
    })
    
})


module.exports = router