// Importaciones de librerías
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();
// llamar a la base de datos
const ConnectDB = require('./connection')
ConnectDB()
// Inicializar los middlewares
const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
// hacer las configuraciones del sv (PORT)
const puerto = process.env.PORT || 4000;
//Archivos estáticos

// Template Engine

//RUTAS
app.use(require('./routers/home.routes'))// hacemos llamar a las rutas por defecto o home
app.use(require('./routers/user.routes'))// hacemos llamar a las rutas de usuario

// Inicializar el SV
app.listen(puerto, console.log(`La conexión fue hecha en http://localhost:${puerto}`))
