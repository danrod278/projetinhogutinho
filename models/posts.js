const mongoose = require('mongoose')
const schemaPosts = new mongoose.Schema({
    conteudo: {
        type: String,
        required: true,
    },

    comentarios:       
            [{
                type: String,
                required: true,
            }],
    gosteis:
    [{
        type: String,
        required: true,
    }],
})

module.exports = {schemaPosts}
