import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./AllTasks.css";
import { MdEditSquare } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";

function AllTasks() {

    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState([]);

    //Buscando as Tarefas no banco de dados
    const getTask = async() => {
        try {
            const response = await axios.get("http://localhost:3000/api/tasks")
            
            const data = response.data;
            const status = response.status;

            setTasks(data);
            setStatus(status);

        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro, tente novamente mais tarde!")
        }

    }

    useEffect(() => {
        getTask();

    }, []);

  return (
    <div className="AllTasks">
        <h1><MdOutlineFormatListBulleted /> Todas as Tarefas</h1>
        <hr />

        {tasks.length === 0 ? <span id='noTask'>Nenhuma Tarefa adicionada</span> : (
            <table className='tableTasks'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Prioridade</th>
                        <th>Status</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                {tasks.map((task) => (
                    <tbody key={task._id}>
                        <tr>
                            <td>{task.name} </td>
                            <td>{task.priority}</td>
                            <td>{task.status === 1 ? "Pendente" : "Concluída"} </td>
                            <td className='Edit'><MdEditSquare size={'1.5em'}/></td>
                        </tr>
                    </tbody>
                    ) 
                )}
            </table>
        )}
    </div>
  )
}

export default AllTasks