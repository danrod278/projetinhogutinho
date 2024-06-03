const mongoose = require('mongoose');

const comentariosSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  conteudo:{
    type:String,
    required:true
  }
})

const schemaPosts = new mongoose.Schema({
  usuario:{
    type:String,
    required:true
  },
  conteudo: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: false
  },
  comentarios: [comentariosSchema],
  gosteis: [{
    username:{
        type: String,
        required: true,
    }
  }],
  _id:{
    type:String,
    required:true
  }
  
}, {timestamps:true});

const Posts = mongoose.model("Posts", schemaPosts);
module.exports = { Posts };
