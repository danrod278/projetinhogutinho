const express = require('express');
const router = express.Router();
const {controller} = require('./dependencias')

router.patch("/comentar", (req, res)=>{
    try{
        const body = req.body
        const username = req.session.user.username
        console.log('Conteudo: '+body.comentario)
        const obj = {
            username:username,
            conteudo:body.comentario,
            _id:body._id
        }
        const saveComment = controller.newComment(obj)
        return saveComment
    }catch (err){
        console.log("Erro ao enviar o comentario (/comentar): "+err)
    }
})

module.exports = router