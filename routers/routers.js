const express = require('express')
const router = express.Router()

const controllers = require('../controllers/controllers')

router.get('/', controllers.inicio)

router.get('/empresas', controllers.empresas)

router.get('/individuos', controllers.individuos)

router.get('/tecnologia', controllers.tecnologia)

router.get('/nosotros', controllers.nosotros)

router.get('/ofertas', controllers.ofertas)

router.get('/create', controllers.crear)

router.get('/show/:id', controllers.mostrar)

router.post('/save', controllers.guardar)

router.get('/edit/:id', controllers.editar)

router.put('/update/:id', controllers.actualizar)

router.delete('/remove/:id', controllers.eliminar)

module.exports = {
    router
}