const mongoose = require('mongoose') 
const schemaUsuarios = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    nome:{
        type:String,
        required: true,
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
    },
    senha:{
        type:String,
        required: true,
    },
    seguidores:{
        type:[String],
        required: true,
    },
    suguindo:{
        type:[String],
        required: true,
    },
    
}
)
const Usuarios = mongoose.model("Usuarios", schemaUsuarios)
module.exports = {Usuarios}
