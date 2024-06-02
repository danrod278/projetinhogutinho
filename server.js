const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

const login = require("./routes/login");
const createUser = require("./routes/novoUsuario");
const home = require("./routes/home");
const post = require('./routes/post')
const comentar = require('./routes/comentar')
const like = require("./routes/like")
const carregaPosts = require('./routes/carregaPosts')

const verificaSecao = require("./middleware/verificaSecao");

// Configuração da sessão
app.use(
    session({
      secret: "40028922",
      resave: false,
      saveUninitialized: true,
    })
  )

// Middleware de análise do corpo da solicitação
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Configuração do mecanismo de visualização
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// Rotas
app.use('/', login);
app.use('/', createUser);
app.use('/', verificaSecao, home);
app.use('/', verificaSecao, post)
app.use('/', verificaSecao, comentar)
app.use('/', verificaSecao, like)
app.use('/', verificaSecao, carregaPosts)

// Iniciar o servidor
const port = 3001;
app.listen(port, () => {
    console.log("Esta rodando na porta " + port);
});
