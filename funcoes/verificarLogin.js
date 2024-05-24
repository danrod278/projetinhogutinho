const {Usuarios, connect} = require("./dependencias")
const {comparar} = require("./criptografia")
connect()

async function verificarLogin(form){
    console.log("verificaLogin chamada")
    const puxaUsuario = await Usuarios.findOne({email:form.email})
    if(puxaUsuario){
        const verificar = await comparar(form.password, puxaUsuario.senha)
        if(verificar){
            console.log("Usuario Liberado :"+puxaUsuario.username)
            return [true, puxaUsuario.username]
        }
        console.log("Usuario ou senha errados")
        return false
    }else{
        console.log("Esse usuario não existe")
        return false
    }
}

module.exports = {verificarLogin}
