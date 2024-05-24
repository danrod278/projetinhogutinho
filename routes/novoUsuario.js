const {router, carregaView, controller } = require("./dependencias")

router.get('/criarUsuario', (req, res) => {
    const carregaPagina = async function(){
    res.render(carregaView("signup"))
    }
    carregaPagina()

})
router.post("/criarUsuario", (req, res) => {
    const form = req.body
    async function resposta(){
        return await controller.createUser(form)
    }
    const response = resposta()
    if(response){
        res.redirect()
    }else{
        res.redirect("/criarUsuario")
    }

})

module.exports = router
