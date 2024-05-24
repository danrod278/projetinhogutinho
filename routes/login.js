const express = require('express');
const router = express.Router();
const {carregaView, controller} = require('./dependencias')

router.get('/login', (req, res) => {
    res.render(carregaView('signin'))
});

router.post("/login", (req, res) => {
    const body = req.body
    console.log(body)
    
    async function chamaVerify(){
        try{
            
            const acesso = await controller.verifyLogin(body)
            console.log(acesso)
            if(acesso[0]){
               req.session.user = {
                    username:acesso[1]
                } /**/
                res.redirect('/')
            }
            else{
                console.log("Login falhou")
                res.redirect('/login')
            }
            
        }catch (err){
            console.log("Houve um erro ao fazer o login: "+err)
        }
    }
    chamaVerify()
})

module.exports = router;
