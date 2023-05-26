const mongoose = require('mongoose')

const conectarDB = async (url) => {

    try {
        await mongoose.connect(url)
        console.log('Base de datos LOCAL: conectada')
    } catch (error) {
        console.log('Error de coneccion a la base de datos', error
        )
    }

}

module.exports = {
    conectarDB
}