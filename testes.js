const { connect } = require("./DB/db");
const { schemaUsuarios } = require("./models/usuarios");
const { schemaPosts } = require("./models/posts");
const mongoose = require("mongoose");
connect();

const Usuarios = mongoose.model("Usuarios", schemaUsuarios);
const Posts = mongoose.model("Posts", schemaPosts);

const nusuario = new Usuarios({
  nome: "Daniel",
  email: "daksa@slaoq.com",
  senha: "tantofaz",
  seguidores: [],
  seguindo: [],
});
nusuario
  .save()
  .then(() => {
    console.log("Registro salvo com sucesso");
  })
  .catch((err) => {
    console.log("Houve um erro ao salvar o registro: "+err);
  });
