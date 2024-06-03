require("./DB/db").connect
const Usuarios = require("./models/usuarios")


const testeUsuario = new Usuarios({
    nome:"Daniel Rodrigues",
    email:"daniel.2023296@aluno.pedreira.org",
    senha:"naomostrarei"
})

testeUsuario.save().then(()=>{
    console.log("Sucesso")
}
).catch(err=>{
        console.log(err)
})
