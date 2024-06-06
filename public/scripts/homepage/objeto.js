export class Post{
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
        
        var divPrincipal = document.getElementById('main')
        var main = document.createElement('div')
        main.classList = 'main'
        var cabecalho = document.createElement('div')
        cabecalho.classList = 'cabecalho'

        var conteudoDiv = document.createElement('div')
        var conteudo = document.createElement('p')
        conteudo.classList = 'conteudo'
        conteudo.textContent = this.conteudo
        conteudoDiv.appendChild(conteudo)
        
        var srcUsername = document.createElement('a')
        srcUsername.href = `/${this.usuario}`
        srcUsername.classList = 'username'
        srcUsername.textContent = this.usuario
        cabecalho.appendChild(srcUsername)
        
        var divMainComentarios = document.createElement('div')
        var cabecalhoComentarios = document.createElement('div')
        var comentariosDiv = document.createElement('div')
        comentariosDiv.classList='comentariosDiv'
        for(var i =0;i<this.comentarios.length;i++){
            let p = document.createElement('p')
            let span = document.createElement('span')
            span.classList="username"
            let a = document.createElement('a')
            a.href = `/${this.comentarios[i].username}`
            a.textContent = this.comentarios[i].username
            span.appendChild(a)
            p.appendChild(span)
            p.insertAdjacentText('beforeend',`: ${this.comentarios[i].conteudo}`)
            p.classList = 'comentarios'
            comentariosDiv.appendChild(p)
        }
        
        var comentarDiv = document.createElement('div')
        var conteudoPost = document.createElement('p')
        
        var gosteiIcon = document.createElement('ion-icon')
        gosteiIcon.name = "heart-outline"
        var inputComentar = document.createElement('input')
        inputComentar.id = idInputComentar
        var botaoEnviar = document.createElement('button')
        botaoEnviar.innerText = 'Enviar'
        botaoEnviar.addEventListener("click", ()=>this.enviarComentario(idInputComentar))
        gosteiIcon.addEventListener('click', ()=>this.like())

        //adicionar tudo a main
        divPrincipal.appendChild(main)
        main.appendChild(cabecalho)
        main.appendChild(conteudoDiv)
        if(this.imagemB64){
            var imagem = document.createElement('img')
            imagem.src = this.imagemB64
            imagem.classList = 'imagens'
            main.appendChild(imagem)
        }
        main.appendChild(gosteiIcon)
        comentarDiv.appendChild(inputComentar)
        comentarDiv.appendChild(botaoEnviar)
        main.appendChild(divMainComentarios)
        divMainComentarios.appendChild(comentariosDiv)
        divMainComentarios.appendChild(comentarDiv)
        main.appendChild(document.createElement('hr'))

    }
    enviarComentario(idInputComentar){
        const input = document.getElementById(idInputComentar).value
        
        if(input.length>0){
           
            try{
                fetch('/comentar', {method:"PATCH",
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
    try{
        fetch('/like', {method:"PATCH",
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

/*let post1 = new Post([{username:"danil", conteudo:'asdasdd'}], [{username:'daniel'}], "CONTEUDO", 'B64',"82f8f525-6fc1-4eec-ae5a-d59bfcf3bca8", "DanielCaminhos", '2024-06-04T01:49:16.517+00:00')

post1.criarHomePage('main', 'id1')*/
