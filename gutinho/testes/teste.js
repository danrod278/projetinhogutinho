require("../DB/db").connect()
const { Posts } = require("../models/posts");

async function buscar(filtro){
    const existencia = await Posts.aggregate(filtro).exec()
    console.log(existencia)

}
const _id = '91a25a6c-7c07-4919-b0e3-2908830a2596'
const username = 'DanielCaminhos'

const filtro = [ { $match: { _id: _id } }, // Encontra o post pelo _id
{ $unwind: '$gosteis' }, // Desagrega o array de comentários
{ $match: { 'gosteis.username': username } }, // Filtra os comentários pelo username
{ $group: { _id: '$_id', gosteis: { $push: '$gosteis' } } }, // Agrupa de volta por _id e reconstroi o array de comentários
{ $project: { gosteis: 1, _id: 0 } }, // Projeta apenas o campo 'comentarios',

]
buscar(filtro)
// Conectar ao banco de dados e criar o post
