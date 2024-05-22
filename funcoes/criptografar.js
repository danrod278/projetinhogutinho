const crypto = require('crypto');

class Criptografia {
    constructor() {
        this.dados_criptografia = {
            algoritmo: 'aes-256-cbc', // Algoritmo de criptografia
            segredo: 'naotemsegredobrow', // Segredo
            tipo: 'hex', // Tipo de saída
            codificacao: 'utf8' // Codificação de entrada
        };
        // A chave precisa ter 32 bytes para AES-256
        this.chave = crypto.createHash('sha256').update(String(this.dados_criptografia.segredo)).digest('base64').substr(0, 32);
        // IV deve ter 16 bytes para AES-256-CBC
        this.iv = crypto.randomBytes(16);
    }

    criptografar(senha) {
        const cipher = crypto.createCipheriv(this.dados_criptografia.algoritmo, this.chave, this.iv);
        let encrypted = cipher.update(senha, this.dados_criptografia.codificacao, this.dados_criptografia.tipo);
        encrypted += cipher.final(this.dados_criptografia.tipo);
        return `${encrypted}:${this.iv.toString(this.dados_criptografia.tipo)}`; // Concatena IV com a mensagem criptografada
    }

    descriptografar(encryptedData) {
        const [encrypted, iv] = encryptedData.split(':');
        const decipher = crypto.createDecipheriv(this.dados_criptografia.algoritmo, this.chave, Buffer.from(iv, this.dados_criptografia.tipo));
        let decrypted = decipher.update(encrypted, this.dados_criptografia.tipo, this.dados_criptografia.codificacao);
        decrypted += decipher.final(this.dados_criptografia.codificacao);
        return decrypted;
    }
}

const criptodescriptografador = new Criptografia();

const senha = '123456789';
const senhaCriptografada = criptodescriptografador.criptografar(senha);
console.log(`Senha criptografada: ${senhaCriptografada}`);

const senhaDescriptografada = criptodescriptografador.descriptografar(senhaCriptografada);
console.log(`Senha descriptografada: ${senhaDescriptografada}`);

module.exports = { criptodescriptografador };
