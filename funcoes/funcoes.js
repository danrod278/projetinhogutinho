const {verificarLogin} = require("./verificarLogin")
const {criarUsuario} = require("./criarUsuario")
const {novoPost} = require('./novoPost')
const {comentar} = require("./novoComentario")
const {darLike} = require("./darLike")
const {carregarPosts} = require('./carregarPosts')
const {deletarPost} = require('./deletarPost')

module.exports = {verificarLogin, criarUsuario, novoPost, comentar, darLike, carregarPosts, deletarPost}
