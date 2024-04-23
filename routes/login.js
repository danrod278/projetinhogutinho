const { express, router, bodyParser, carregaView, models, Controller } = require("./dependencias")
router.get('/login', (req, res) => {
    const carregaPagina = async function(){
    res.render(carregaView("login"))
    }
    carregaPagina()

})
router.post("/login", (req, res) => {
    let form = (req.body)

    console.log("Formulario recebido "+form)
    Controller.verificarUsuario(form)
    Controller.salvarPedido(form)

})

module.exports = router