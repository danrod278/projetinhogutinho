import {Post} from "./objeto.js"

function verificarFimPagina() {
    var ultimoElemento = document.querySelector('body').lastElementChild; // Último elemento no corpo do documento
    var posicaoScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    var alturaJanela = window.innerHeight;
    var margem = 100; // Margem em pixels para determinar a proximidade do fim da página

    var posicaoUltimoElemento = ultimoElemento.offsetTop + ultimoElemento.offsetHeight;

    if (posicaoUltimoElemento - posicaoScroll <= alturaJanela + margem) {
       
        window.removeEventListener('scroll', verificarFimPagina);
        construirPosts()
    }
}




async function requisitaPosts(){
    const response = await fetch('/carregaPosts', {method:"POST",
    headers: {
    'Content-Type': 'application/json'}})
    if(!response.ok){
        console.log('Houve um erro ao requisitar os posts: '+response.statusText)
    }
    
    return response.json()
}

async function construirPosts(){
    const posts = await requisitaPosts()
    
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
        objetos[i].criarHomePage('main',`inputComentar${i}`)
    }
    window.addEventListener('scroll', verificarFimPagina);

}

async function anonima(){
    const turn =  await fetch('/turn', {method:"POST",
    headers: {
    'Content-Type': 'application/json'}})
    if(!turn.ok){
        console.log('Houve um erro ao requisitar os posts: '+turn.statusText)
    }
    return turn.json()
}

if(await anonima()==0){
    construirPosts()
}