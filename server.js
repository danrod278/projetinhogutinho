const express    = require("express")
const app        = express()
const path       = require("path")
const bodyParser = require("body-parser")
const login       = require("./routes/login")
const novoUsuario = require("./routes/novoUsuario")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"))
app.use(express.static('public'))

app.use('/', login)
app.use("/", novoUsuario)

app.listen(3000, ()=>{
    console.log("Esta rodando na porta 3000")
})
