const express = require('express');
const router = express.Router();
const {controller} = require('./dependencias')

router.patch('/like', (req, res)=>{
    console.log('Like chamada (/like)')
    const obj = {
        _id:req.body._id,
        username:req.session.user.username
    }
    try{
        const statusLike = controller.newLike(obj)
        return statusLike
    }catch (err){
        console.log("Houve um erro ao dar like (/like): "+err)
        return false
    }
})

module.exports = router
