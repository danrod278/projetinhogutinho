const express = require('express');
const router = express.Router();

router.post('/turn', (req, res)=>{
    console.log(req.session.user.turn)
   res.json(req.session.user.turn)
})
module.exports = router