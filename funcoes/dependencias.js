const {connect} = require("../DB/db")
const {Posts} = require("../models/posts")
const {Usuarios} = require("../models/usuarios")

module.exports =  {Usuarios, Posts, connect}