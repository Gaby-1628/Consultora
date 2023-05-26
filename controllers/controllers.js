const Oferta = require("../models/ofertasLab")

const inicio = async (req, res) => {

    try {
        const ofertas = await Oferta.find({}).lean() // Pasar de un objeto de mongoose, a un objeto de js.
        res.status(200).render('inicio', {ofertas})
    } catch (error) {
        console.log('Ocurrio un error al intentar leer todas las ofertas')
        res.status(404).send('Ocurrio un error al intentar leer todas las ofertas')
    }

}

const empresas = async (req, res) => {

    try {
        const ofertas = await Oferta.find({}).lean() // Pasar de un objeto de mongoose, a un objeto de js.
        res.status(200).render('empresas', {ofertas})
    } catch (error) {
        console.log('Ocurrio un error al intentar leer todas las ofertas')
        res.status(404).send('Ocurrio un error al intentar leer todas las ofertas')
    }

}

const individuos = async (req, res) => {

    try {
        const ofertas = await Oferta.find({}).lean() // Pasar de un objeto de mongoose, a un objeto de js.
        res.status(200).render('individuos', {ofertas})
    } catch (error) {
        console.log('Ocurrio un error al intentar leer todas las ofertas')
        res.status(404).send('Ocurrio un error al intentar leer todas las ofertas')
    }

}

const tecnologia = async (req, res) => {

    try {
        const ofertas = await Oferta.find({}).lean() // Pasar de un objeto de mongoose, a un objeto de js.
        res.status(200).render('tecnologia', {ofertas})
    } catch (error) {
        console.log('Ocurrio un error al intentar leer todas las ofertas')
        res.status(404).send('Ocurrio un error al intentar leer todas las ofertas')
    }

}

const nosotros = async (req, res) => {

    try {
        const ofertas = await Oferta.find({}).lean() // Pasar de un objeto de mongoose, a un objeto de js.
        res.status(200).render('nosotros', {ofertas})
    } catch (error) {
        console.log('Ocurrio un error al intentar leer todas las ofertas')
        res.status(404).send('Ocurrio un error al intentar leer todas las ofertas')
    }

}

const ofertas = async (req, res) => {

    try {
        const ofertas = await Oferta.find({}).lean() // Pasar de un objeto de mongoose, a un objeto de js.
        res.status(200).render('ofertas', {ofertas})
    } catch (error) {
        console.log('Ocurrio un error al intentar leer todas las ofertas')
        res.status(404).send('Ocurrio un error al intentar leer todas las ofertas')
    }

}

const crear = (req, res) => {
    res.render('ofertasLab/create')
}

const mostrar = async (req, res) => {

    try {
        const oferta = await Oferta.findById(req.params.id).lean() // Pasar de un objeto de mongoose, a un objeto de js.

        if(!oferta) {
            return req.status(400).send('No se encuentra la oferta')
        }

        res.render('ofertasLab/show', { oferta })

    } catch (error) {
        console.log('Se produjo un error en el SHOW', error)
        res.status(404).send('Se produjo un error')
    }

}

const guardar = async (req, res) => {
    try {
        console.log(req.body)
        let ofertLab = {
            title: req.body.title,
            fecha: req.body.fecha
        }
        let oferta = new Oferta(ofertLab)
        oferta = await oferta.save() // En el caso de que la oferta no se pueda crear, me va a devolver un null
        if (!oferta) {
            return res.status(400).send('Algo fallo al crear la oferta')
        }
        // console.log(oferta)
        // res.status(201).send('Oferta guardada correctamente')
        res.redirect('/')
    } catch (error) {
        console.log('ERROR SAVE', error)
    }
}

const editar = async (req, res) => {

    try {
        const oferta = await Oferta.findById(req.params.id).lean() // lean() : Transforma un obj mongoose, en un obj de js.

        if ( !oferta ) {
            return res.status(400).send('No se encuentra la oferta que usted quiere editar')
        }

        const { title, fecha, _id} = oferta

        res.render('ofertasLab/edit', { title, fecha, _id })

    } catch (error) {
        console.log('Error EDIT', error)
        res.render('Ocurrio un error al intentar mostrar el formulario')
    }

    // res.render('ofertasLab/edit')
}

const actualizar = async (req, res) => {

    /* Una vez aca lo que tengo que hacer es buscar y editar la oferta */

    console.log(req.params.id)
    console.log(req.body)

    try {

        const {title, fecha} = req.body

        const oferta = await Oferta.findByIdAndUpdate(req.params.id, {title, fecha})

        if (!oferta) {
            return res.status(400).send('No se encontro la oferta')
        }

        res.redirect('/')

    } catch (error) {
        console.log('Error al querer editar la oferta', error)
        res.status(400).send('Error al querer editar la oferta', error)
    }

    // res.send('Ruta que guarda la oferta editada')
}

const eliminar = async (req, res) => {

    /* 
    * El method Override me ayuda a que pueda utilizar desde un formulario metodos POST el metodo DELETE en mi Backend.
    * Una vez en este controlador. Tengo que basado en el id. Borrar esta pelicula.
    */

    console.log(req.params.id)

    try {
        const isDeleted = await Oferta.findByIdAndDelete(req.params.id)
        // const isDeleted = await Oferta.find({_id : req.params.id})

        if( !isDeleted ) {
            return res.status(400).send('No se encontro la oferta que desea eliminar')
        }

        res.redirect('/')

    } catch (error) {
        console.log('Error DELETE', error)
        res.status(404).send('Ocurrio un error al intentar eliminar la oferta')
    }

    // res.send('Ruta que elimina una oferta por id')
}

module.exports = {
    inicio,
    ofertas,
    empresas,
    individuos,
    tecnologia,
    nosotros,
    crear,
    mostrar,
    guardar,
    editar,
    actualizar,
    eliminar
}