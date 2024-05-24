const { criarUsuario, verificarLogin } = require("./funcoes/funcoes");

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

    
}

// Criar uma instância do Controller
const controller = new Controller();
module.exports = { controller };
