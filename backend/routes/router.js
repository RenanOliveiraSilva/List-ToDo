//Importação do router
const router = require("express").Router();

//Esse arquivo é um centralizador de rotas, para organização de todo o projeto

//Rotas de Task
const taskRouter = require("./taskRoutes");
router.use("/", taskRouter);

//Exportação
module.exports = router;