const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")

router.use(bodyParser.json())
router.get('/login', (req, res) => {
    res.send({ message: "Envie seu cadastro" });
});

router.post("/login", (req, res) => {
    const body = JSON.stringify(req.body)
    async ()=>{
        if (email && senha) {
            console.log("Formulário recebido:", body);
            res.send({ message: "Formulário recebido com sucesso", body});
        } else {
            res.send({ message: "Nada recebido em Login" });
            console.log("Não recebi nada");
        }
    }

});

module.exports = router;
