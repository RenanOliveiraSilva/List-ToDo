//Importação do router
const router = require("express").Router();

//Esse arquivo é um centralizador de rotas, para organização do projeto

//Rotas de Task
const taskRouter = require("./taskRoutes");
router.use("/", taskRouter);

//Exportação
module.exports = router;