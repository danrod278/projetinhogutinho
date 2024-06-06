const {Posts, connect} = require("./dependencias")
const {verificarLogin} = require('./verificarLogin')
const {v4: uuidv4} = require("uuid")
connect()

async function novoPost(obj){
    try{
        const trueUser = await verificarLogin(obj.usuario, true)
        
        if(trueUser){

            const addPost = new Posts({
                usuario:obj.usuario,
                conteudo:obj.conteudo,
                imagem:obj.imagem,
                _id:uuidv4()
            })
            await addPost.save()
            console.log("Post salvo com sucesso")
            return true
        }else{
            console.log("esse usuario não existe")
            return false
        }
    }catch (err){
        console.log("Houve um erro ao tentar salvar essa postagem: "+err)
    }
    
}

module.exports = {novoPost}