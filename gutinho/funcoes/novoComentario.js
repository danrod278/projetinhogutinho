const {Posts, connect} = require("./dependencias")
const {verificarLogin} = require('./verificarLogin')
connect()

async function comentar(form){
    const {_id, conteudo, username} = form
    
    try{
        if(verificarLogin(username, true)){
            
            await Posts.findOneAndUpdate(
                {_id:_id},
                {$push:{comentarios:{username, conteudo}}})

            console.log("Comentario criado com sucesso (novoComentario.js)")
            return true
        }

        console.log("Esse usuario não existe")
        return false
    }catch (err){
        console.log("Houve um erro ao adicionar o comentario (novoComentario.js): "+err)
    }
}

module.exports = {comentar}
