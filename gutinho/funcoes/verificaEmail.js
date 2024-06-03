
async function isStudent(email) {
    let arr  = email.split("@");
    let separado_email = arr[1]
    console.log(separado_email)
    if (separado_email == "aluno.pedreira.org" || separado_email == "caminhosecolinas.org.br"){
        console.log("é aluno")
        return true
    } else {
        console.log("não é aluno")
        return false
    }
}

module.exports = {isStudent}
