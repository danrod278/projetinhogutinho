const {Usuarios, connect} = require("./dependencias")
const {comparar} = require("./criptografia")
connect()

async function verificarLogin(form, param=false){
     
    if(param){
        const puxaUsuario = await Usuarios.findOne({username:form})
        if(puxaUsuario){
            console.log("Usuario encontrado (verificarLoginP)")
            return true
        }else{
            console.log("Esse usuario não existe (verificarLoginP)")
            return false
        }
    }

    console.log("verificaLogin chamada")
    
    const puxaUsuario = await Usuarios.findOne
    ({email:form.email})
    if(puxaUsuario){
        const verificar = await comparar(form.password, puxaUsuario.senha)
        if(verificar){
            console.log("Usuario Liberado :"+puxaUsuario.username)
            return [true, puxaUsuario.username]
        }
        console.log("Usuario ou senha errados")
        return false
    }
    
    else{
        console.log("Esse usuario não existe")
        return false
    }
}

module.exports = {verificarLogin}
