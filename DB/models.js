const db = require("./db")
const sequelize = db.sequelize
const Sequelize = db.Sequelize

const Clientes = sequelize.define("usuarios", {
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    }
})


/*Clientes.sync({force:true})*/


module.exports = {Clientes, sequelize, Sequelize}