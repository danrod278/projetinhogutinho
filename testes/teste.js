class Post{
    constructor(comentarios, gosteis, conteudo, imagemB64, _id, usuario, createdAt){
        this.comentarios = comentarios
        this.gosteis = gosteis
        this.conteudo = conteudo
        this.imagemB64 = imagemB64
        this._id = _id
        this.usuario = usuario
        this.createdAt = createdAt
    }
    criarHomePage(iddivmain, idInputComentar){
        var divPrincipal = document.getElementById(iddivmain)
        var main = document.createElement('div')
        main.classList = 'main'
        var cabecalho = document.createElement('div')
        cabecalho.classList = 'cabecalho'
        var divMainComentarios = document.createElement('div')
        var cabecalhoComentarios = document.createElement('div')

        for(var i =0;i<this.comentarios.length;i++){

        }

        var comentarDiv = document.createElement('div')
        var conteudoPost = document.createElement('p')
        var imagem = document.createElement('img')
        var gosteiIcon = document.createElement('svg')
        var inputComentar = document.createElement('input')
        inputComentar.id = idInputComentar
        var botaoEnviar = document.createElement('button')
        botaoEnviar.addEventListener("click", ()=>this.enviarComentario(idInputComentar))
        gosteiIcon.addEventListener('click', ()=>this.like())

        divPrincipal.appendChild(main)
        main.appendChild(cabecalho)
        comentarDiv.appendChild(inputComentar)
        comentarDiv.appendChild(botaoEnviar)
        main.appendChild(divMainComentarios)
        divMainComentarios.appendChild(comentarDiv)


    }
    enviarComentario(idInputComentar){
        const input = document.getElementById(idInputComentar).value
        
        if(input.length>0){
            console.log("fizeram um comentario: "+input)
            try{
                fetch('localhost:3001/comentar', {method:"POST",
                headers: {
                'Content-Type': 'application/json'},
                body:JSON.stringify({comentario:input, _id:this._id})}).then(response=>{
                    if(!response.ok){
                        console.log("Houve um erro ao enviar os dados do comentario: "+response.status)
                        return false
                    }
                    console.log('Comentario enviado com sucesso')
                    

                })
            }catch (err){
                console.log("Houve um erro ao enviar enviar os comentarios (objeto.js): "+err)
            } 
        }
    }
    like(){
         
    console.log("deram um like: ")
    try{
        fetch('localhost:3001/like', {method:"PATCH",
        headers: {
        'Content-Type': 'application/json'},
        body:JSON.stringify({_id:this._id})}).then(response=>{
            if(!response.ok){
                console.log("Houve um erro ao enviar os dados do comentario: "+response.status)
                return false    
            }
            console.log('Comentario enviado com sucesso')
            return true
    
        })
    }catch (err){
        console.log("Houve um erro ao enviar os dados do comentario: "+err)
    }
    }

}

let post1 = new Post([{username:"danil", conteudo:'asdasdd'}], [{username:'daniel'}], "Danrod", "", "6e3a6fc1-dd64-406c-941c-8dec325e360a", 'localhost:3001')

post1.criarHomePage('main', 'id1')