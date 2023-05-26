const mongoose = require('mongoose')

/* --------------------------------- */
/* SCHEMA                            */
/* --------------------------------- */

const ofertaSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
fecha: Number
})

/* --------------------------------- */
/* MODEL                             */
/* --------------------------------- */

const ofertasModel = mongoose.model('ofertas', ofertaSchema)
module.exports = ofertasModel
