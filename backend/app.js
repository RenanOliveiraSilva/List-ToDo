//Importação de pacotes
const express = require("express");
const cors = require("cors");

//Inicializando o express
const app = express();

//Adicionando configurações
app.use(cors());
app.use(express.json());

//Conexão com o banco de dados
const conn = require("./db/conn");
conn();

//Rotas
const routes = require("./routes/router");

app.use("/api", routes);

//Iniciando Servidor
app.listen(3000, function() {
    console.log("Servidor Online!");
});