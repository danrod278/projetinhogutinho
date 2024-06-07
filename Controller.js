const { criarUsuario, verificarLogin, novoPost, comentar, darLike, carregarPosts, deletarPost} = require("./funcoes/funcoes");

class Controller {
    constructor() {
        // Nenhuma inicialização necessária por enquanto
    }

    createUser(form) {
        return criarUsuario(form);
    }

    verifyLogin(form) {
        return verificarLogin(form);
    }

    newPost(obj){
        return novoPost(obj)
    }
    
    newComment(form){
        return comentar(form)
    }

    newLike(form){
        return darLike(form)
    }
    loadPosts(username, turn){
        return carregarPosts(username, turn)
    }
    deletePost(id){
        deletarPost(id)
    }
}

// Criar uma instância do Controller
const controller = new Controller();
module.exports = { controller };
