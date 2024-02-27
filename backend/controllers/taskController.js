//Importação do model
const TaskModel = require("../models/Task");

//Criação das funcionalidades 
const taskController = {
    //Função de criar uma tarefa
    createTask: async(req, res) => {
        try {
            //Objeto com as propriedados do taskModel
            const task = {
                name: req.body.name,
                priority: req.body.priority,
                status: 1,
            }

            //Verificação
            if (task.name && task.priority) {
                console.log("Parei aq")
            }

            //Registro inserido no banco -> O mongoose é responsável por esse Create 
            const response = await TaskModel.create(task);
            
            //Resposta em json | 1º Arg: Registro inserido | 2º Arg: Mensage,
            //Definir um status: 201 é para criação de algo no banco com sucesso
            res.status(201).json({response, msg: "Task criada!"});


        } catch (error) {
            console.log(error)

        }
    },
    //Função para listar todas as tarefas
    getAllTasks: async(req, res) => {
        try {
            //Busca de tarefas no banco
            const tasks = await TaskModel.find();
            
            //Resposta
            res.json(tasks);
            
        } catch (error) {
            console.log(error);
        }
    },
    //Função para listar todas as tarefas concluídas
    getTaskCompleted: async(req, res) => {
        try {
            const status = req.params.status;

            const tasks = await TaskModel.find({status: status});
            
            //Resposta
            res.json(tasks);
            
        } catch (error) {
            
        }
    },
    //Função para excluir as tarefas
    deleteTask: async(req, res) => {
        try {
            const id = req.params.id;
            const task = await TaskModel.findById(id);

            if (!task) {
                res.status(404).json({msg: "Serviço não encontrado"});
                return;
            }

            const deletedTask = await TaskModel.findByIdAndDelete(id);
            res.status(200).json({deletedTask, msg: "Serviço excluído com sucesso"})

            

        } catch (error) {
            console.log(error);
            
        }

    },
    //Função para modificar a task como concluída
    completTask: async(req, res) => {
        try {
            const id = req.params.id;
            const task = await TaskModel.findById(id);
           
            if (!task) {
                res.status(404).json({msg: "Serviço não encontrado"});
                return;
            }

            const updatedTask = await TaskModel.findByIdAndUpdate()

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = taskController;