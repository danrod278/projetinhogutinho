const {Usuarios, connect} = require("./dependencias")
const {criptografar} = require("./criptografia")
const {v4: uuidv4} = require("uuid")
connect()

async function criarUsuario(form){
    const verificacao = await Usuarios.find({
        $or:[
            {email:form.email},
            {username: form.username}
        ]
    })
    console.log(verificacao)
    if (verificacao.length!=0){
        console.log("Usuario já existente")
        return false
    }else{
        const senhaDB = await criptografar(form.senha)  
        const nUser = new Usuarios({
            _id:uuidv4(),
            nome:form.nome,
            username:form.username,
            email: form.email,
            senha: senhaDB
        })
        nUser.save().then(()=>{
            console.log("Usuario salvo com sucesso")
        }).catch(err=>{
            console.log("Houve um erro ao criar o usuario:    "+err)
        })
        return true
    }
}

module.exports = {criarUsuario}
