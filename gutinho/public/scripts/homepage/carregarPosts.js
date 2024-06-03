import {Post} from "./objeto.js"

async function requisitaPosts(){
    fetch('/carregaPosts', {method:"POST",
    headers: {
    'Content-Type': 'application/json'}}).then(response=>{
        console.log(response)
       return response.json()
    }).then(posts=>{
        console.log(posts)
        return posts
    })
}

async function construirPosts(){
    const posts = requisitaPosts()
    var objetos = []
    for (var i = 0; i < posts.length; i++){
        let comentarios = posts[i].comentarios
        let gosteis = posts[i].gosteis
        let conteudo = posts[i].conteudo
        let usuario = posts[i].usuario
        let imagemB64 = posts[i].imagem
        let _id = posts[i]._id
        let createdAt = posts[i].createdAt
        objetos[i] = new Post(comentarios, gosteis, conteudo, imagemB64, _id, usuario, createdAt)
        
    }

}

construirPosts()