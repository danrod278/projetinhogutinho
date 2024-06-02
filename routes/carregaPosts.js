const express = require('express');
const router = express.Router();
const {controller} = require('./dependencias')

router.post('/carregaPosts', (req, res)=>{
    async function carrega(){
        try{
            const username = req.session.user.username
            const turn = req.session.user.turn
            console.log(username, turn)
            const posts = await controller.loadPosts(username, turn)
            req.session.user.turn = turn+1
            console.log(posts)
            res.json(posts)
        }catch (err){
            console.log("Houve um erro ao requisitar loadPosts (/carregarPosts): "+err)
        }

    }
    carrega()
})

module.exports = router
