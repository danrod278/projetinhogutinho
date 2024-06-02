const {Posts, connect} = require("./dependencias")
const {verificarLogin} = require('./verificarLogin')
connect()

async function darLike(form){
    const {_id, username} = form
    
    try{
        const filtro = [ { $match: { _id: _id } }, // Encontra o post pelo _id
        { $unwind: '$gosteis' }, // Desagrega o array de comentários
        { $match: { 'gosteis.username': username } }, // Filtra os comentários pelo username
        { $group: { _id: '$_id', gosteis: { $push: '$gosteis' } } }, // Agrupa de volta por _id e reconstroi o array de comentários
        { $project: { gosteis: 1, _id: 0 } }, // Projeta apenas o campo 'comentarios',
        ]

        if(verificarLogin(username, true)){
           const consultaExistencia = await Posts.aggregate(filtro)
           console.log(consultaExistencia)
           if(consultaExistencia.length>0){
                if(consultaExistencia[0].gosteis.length>0){
                    /**/await Posts.updateOne({_id:_id}, {$pull:{gosteis:{username:username}}})
                    console.log('Like apagado (darLike.js)')
                    console.log(await Posts.aggregate(filtro))
                    return
                }   
            }
           else{
                /**/await Posts.findOneAndUpdate({_id:_id}, {$push:{gosteis:{username}}})
                console.log("Like adicionado (darLike.js)")
                console.log(await Posts.aggregate(filtro))
                return
            }
        }

        console.log("Esse usuario não existe (darLike.js)")
        return false
    }catch (err){
        console.log("Houve um erro ao adicionar o like (darLike.js): "+err)
    }
}

module.exports = {darLike}
