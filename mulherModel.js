const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    Imagem: {
        type: String,
        require: true,
    },
    citacao:{
        type: String,
        require: true,
    },
    mimibio: {
        type : String,
        require: true,
    }
})

module.exports = mongoose.model('diva', MulherSchema)