const express = require('express');
const router = express.Router();
const {carregaView, controller} = require('./dependencias')

router.get('/', (req, res)=>{
    res.render(carregaView('homepage'))
})



module.exports = router