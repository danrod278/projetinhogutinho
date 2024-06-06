  const express = require('express');
  const router = express.Router();
  const {carregaView, controller} = require('./dependencias')

  router.post("/post", (req, res)=>{
    try{
      
      const body = req.body
      console.log(body.input.length>0)
      if(body.input.length>0 || body.image!=null){
        const obj = {
          usuario:req.session.user.username,
          conteudo:body.input,
          imagem:req.body.image
        } 
        controller.newPost(obj)
      }
      
    }catch (err){
      console.log("Houve um erro ao enviar os posts (/posts): "+err)
    }
  })

  module.exports = router
