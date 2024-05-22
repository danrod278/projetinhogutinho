const {Usuarios, connect} = require("./dependencias")
const {criptodescriptografador} = require("./criptografar")
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
        const nUser = new Usuarios({
            nome:form.nome,
            username:form.username,
            email: form.email,
            senha: criptodescriptografador.criptografar(form.senha)
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
