  const express = require('express');
  const router = express.Router();
  const {carregaView, controller} = require('./dependencias')

  router.post("/post", (req, res)=>{
    const body = req.body
    console.log(body)
    const obj = {
      usuario:req.session.user.username,
      conteudo:body.input,
    } 
    console.log("obj: "+obj.usuario)
    controller.newPost(obj)
  })

  module.exports = router
