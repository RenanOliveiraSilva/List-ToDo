import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import "./PendingTasks.css"

function PendingTasks() {

  const [tasks, setTasks] = useState([]);

  //Buscando as Tarefas no banco de dados
  const getTask = async() => {
      try {
          const response = await axios.get("http://localhost:3000/api/tasks/1")
          
          const data = response.data;
          setTasks(data);

      } catch (error) {
          console.log(error);
      }

  }

  //Excluindo tasks no banco de dados
  async function deleteTask(id) {
        
        try {
            const response = await axios.delete(`http://localhost:3000/api/tasks/${id}`);
            location.reload();
            alert("Tarefa deletada com sucesso ");

        } catch (error) {
            console.log(error);

        }
    }

        //Marcando a tarefa como concluída
        async function completeTask(id) {
        
            try {
                const response = await axios.put(`http://localhost:3000/api/tasks/editTask/${id}`);
                location.reload();
                alert("Tarefa concluída com sucesso ");
    
            } catch (error) {
                console.log(error);
    
            }
        }

  useEffect(() => {
      getTask();

  }, []);

  return (
    <div className="PendingTaks">
        <h1><MdOutlinePendingActions /> Tarefas Pendentes</h1>
        <hr />
        {tasks.length === 0 ? <span id='noTask'>Nenhuma Tarefa adicionada</span> : (
            <table className='tableTasksPending'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Prioridade</th>
                        <th>Status</th>
                        <th>Concluir</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                {tasks.map((task) => (
                    <tbody  key={task._id}>
                        <tr>
                            <td>{task.name} </td>
                            <td>{task.priority}</td>
                            <td>Pendente</td>
                            <td className='Edit'> <button id='btnDelete' onClick={() => completeTask(task._id)}> <RiVerifiedBadgeLine  color="green" size={'1.5em'}/> </button></td>
                            <td className='Edit'><button id='btnDelete' onClick={() => deleteTask(task._id)}> <MdDelete  color="red" size={'1.5em'}/> </button></td>
                        </tr>
                    </tbody>
                    ) 
                )}
            </table>
        )}
    </div>
  )
}

export default PendingTasks