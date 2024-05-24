const { connect } = require("./DB/db");
const { Usuarios } = require("./models/usuarios");
const { Posts } = require("./models/posts");
const mongoose = require("mongoose");
connect();

const nusuario = new Usuarios({
  nome: "Daniel",
  username:"danrod",
  email: "daksa@slaoq.com",
  senha: "tantofaz",
  seguidores: [],
  seguindo: [],
});

nusuario.save().then(() => {
    console.log("Registro salvo com sucesso");
}).catch((err) => {
    console.log("Houve um erro ao salvar o registro: "+err);
});
