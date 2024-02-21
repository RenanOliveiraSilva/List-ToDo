//Importação do mongoose
const mongoose = require("mongoose");

//Configuração do .env
const dotenv = require("dotenv");
dotenv.config()
const connString = process.env.STRINGCONECTION;

async function main() {
    try {
        await mongoose.connect(connString);

        console.log("Banco de dados conectado")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main;