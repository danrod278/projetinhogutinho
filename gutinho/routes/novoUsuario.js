const {router, carregaView, controller } = require("./dependencias")

router.get('/criarUsuario', (req, res) => {
    const carregaPagina = async function(){
    res.render(carregaView("signup"))
    }
    carregaPagina()
})

router.post("/criarUsuario", (req, res) => {
    const form = req.body
    console.log(form)
    async function criar(){
        const response = await controller.createUser(form)
        console.log(response)
        if(response[0]){
            req.session.user={
                username:response[1]
            }
            res.redirect('/')
        }else{
            res.redirect("/criarUsuario")
        }
    }
    criar()
})

module.exports = router
