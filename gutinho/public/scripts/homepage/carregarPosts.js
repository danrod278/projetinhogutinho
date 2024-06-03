import Post from "./objeto"

async function requisitaPosts(){
    fetch('/carregaPosts', {method:"POST",
    headers: {
    'Content-Type': 'application/json'}}).then(response=>{
        console.log(response)
       return response.json()
    }).then(posts=>{
        return posts
    })
}

async function construirPosts(){
    const posts = requisitaPosts()

}

construirPosts()