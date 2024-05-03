const mongoose = require('mongoose') 
const schemaUsuarios = new mongoose.Schema({
    nome:{
        type:String,
        required: true,
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