const express = require('express');
const morgan = require('morgan');
const app = express();
const { createConnection } = require('./db.js'); // Importa la función de conexión

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Conecta a la base de datos
const Connection = createConnection();
Connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        process.exit(1);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

// Rutas
app.use('/api/', require('./routes/respuesta.js'));
