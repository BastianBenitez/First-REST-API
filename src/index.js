const express = require('express')
const morgan = require('morgan')
const app = express()

app.set(morgan('dev'))
app.set(express.json())

app.listen(process.env.PORT || 3000, () =>{
    console.log('Server ready');
})

app.use(require('./routes/respuesta.js'))