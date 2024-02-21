//Importação do mongoose
const mongoose = require("mongoose");

//Importação e configuração do .envs
const dotenv = require('dotenv');
dotenv.config();

const strConn = process.env.STRINGCONECTION;

//Criação da função de conexão
async function main() {
    try {
        //Conexão com o banco de dados
        await mongoose.connect(strConn);

    } catch (error) {
        //Tratamento de dados
        console.log(error);
    }
}

//Exportação da função
module.exports = main;