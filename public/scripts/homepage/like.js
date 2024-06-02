document.getElementById('like').addEventListener('click', sendLike)

function sendLike(){
    
    console.log("deram um like: ")
    try{
        fetch('/like', {method:"PATCH",
        headers: {
        'Content-Type': 'application/json'},
        body:JSON.stringify({_id:'59098bc8-64ee-4137-acce-62b5afa30148'})}).then(response=>{
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
