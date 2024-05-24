const bcrypt = require("bcrypt")

const nivelCriptografia = 10

async function criptografar(senha){
    const hash = await bcrypt.hash( senha, nivelCriptografia)
    return `${hash}`
}

async function comparar(senha, hashDB){
    try{
        const mash = await bcrypt.compare(senha, hashDB)
        if(mash){
            return true
        }
        return false
    }catch (err){
        console.log("Houve um erro na comparação: "+err)
    }
    
}

module.exports = {criptografar, comparar}