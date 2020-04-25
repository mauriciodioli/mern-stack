const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// setting  aqui se define el nombre del servidor, motor de plantillas un puerto definido, se definene variables que toda la aplicacion tiene acceso
app.set('port', process.env.PORT || 4000);


// middlewares
app.use(cors());
app.use(morgan('dev'));// muestra distintos mensajes
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/users', require('./routes/user'))
app.use('/api/notes',  require('./routes/notes'))

module.exports = app;