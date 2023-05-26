const express = require('express')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
require('dotenv').config()

const Oferta = require('./models/ofertasLab')
const { router } = require('./routers/routers')
const { conectarDB } = require('./database/config-mongoose')

// VARIABLES
const PORT = process.env.PORT

// EXPRESS
const app = express()

// EXPRESS HANDLEBARS
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './views')

// MIDDLEWARES
app.use('/', express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

// RUTAS
app.use('/', router)

/* Conexión a la base de datos y arranque del servidor */
const arrancar = async () => {

    try {
        await conectarDB(process.env.URI_REMOTA)
        app.listen(PORT)
        console.log('Servidor escuchando en el puerto:', PORT)
    } catch (error) {
        console.log(error)
    }
    
}

arrancar()

