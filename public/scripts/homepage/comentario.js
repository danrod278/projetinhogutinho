document.getElementById('post1').addEventListener('click', sendComment)

function sendComment(){
    const input = document.getElementById('comentario1').value
    console.log("fizeram um comentario: "+input)
    fetch('/comentar', {method:"PATCH",
    headers: {
    'Content-Type': 'application/json'},
    body:JSON.stringify({comentario:input, _id:"29904cff-83ff-413b-88b4-e7a677955fb9"})}).then(response=>{
        if(!response.ok){
            console.log("Houve um erro ao enviar os dados do comentario: "+response.status)
            return false    
        }
        console.log('Comentario enviado com sucesso')
        return true

    })
}
