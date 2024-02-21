//Importação do mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    priority: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        required: true
    }
}, {timestamps: true} );

//Criação do Model -> 1º Arg: Nome do model | 2º Arg: Schema
const Task = mongoose.model("Task", taskSchema);

//Exportação
module.exports = Task;
