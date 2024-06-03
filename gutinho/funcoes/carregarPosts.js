const {connect} = require("../DB/db")
const {Posts} = require("../models/posts")
const {verificarLogin} = require("./verificarLogin")
connect()
async function carregarPosts(username, turn){
    
    try{
        if(verificarLogin(username, true)){
            const posts = await Posts.find().sort({createdAt:-1}).skip(2*turn).limit(2)
            
            return posts
        }
    }catch (err){
        console.log("Houve um erro ao carregar os posts (carregarPosts.js): " +err)
    }
}

module.exports = {carregarPosts}
