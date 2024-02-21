//Importação do Router
const router = require("express").Router();

//Importação dos services de task
const taskController = require("../controllers/taskController");

//Funcionalidades
// 1 - Rota de criação de task
router.route("/tasks").post((req, res) => taskController.createTask(req, res));

// 2 - Rota de busca de todas as tasks 
router.route("/tasks").get((req, res) => taskController.getAllTasks(req, res));

// 3 - Rota de busca de tasks concluídas
router.route("/tasks/:status").get((req, res) => taskController.getTaskCompleted(req, res));

// 4 - Rota de exclusão de task 
router.route("/tasks/:id").delete((req, res) => taskController.deleteTask(req, res));

//Exportação
module.exports = router;