const { express, router, bodyParser, carregaView, models, Controller } = require("./dependencias")
router.get('/criarUsuario', (req, res) => {
    const carregaPagina = async function(){
    res.render(carregaView("novoUsuario"))
    }
    carregaPagina()

})
router.post("/criarUsuario", (req, res) => {
    const form = req.body
    console.log({form})

})

module.exports = router