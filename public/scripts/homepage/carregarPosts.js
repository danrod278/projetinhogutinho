async function construirPagina(){
    fetch('/carregaPosts', {method:"POST",
    headers: {
    'Content-Type': 'application/json'}}).then(response=>{
        console.log(response)
       return response.json()
    }).then(posts=>{
        console.log(posts)
    })
}

construirPagina()