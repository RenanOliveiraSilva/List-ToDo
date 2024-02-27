import React, { useState } from 'react'
import axios from 'axios';
import "./AddTask.css"
import { useNavigate } from "react-router-dom";
import { MdFormatListBulletedAdd } from "react-icons/md";

const AddTask = () => {
  const navigate = useNavigate();
  const btnSubmit = document.getElementById('submit');

  function confirmSubmit(date) {

    if ( !date ) {
      alert("Preencha todos os campos corretamente !!!");
      return;

    }

    alert("Tarefa Adicionada com sucesso!!!");
    navigate("/");

  }

  const [ task, setTask ] = useState({
    name: '',
    priority: 1

  });

  const handleInput = (e) => {
    setTask({...task, [e.target.name]: e.target.value})

  }

  async function insertData() {

    //Desabilitar o botão do formulário
    btnSubmit.disabled = true
    axios.post('http://localhost:3000/api/tasks', {
      name: task.name,
      priority: task.priority
    }

    )
    .then(function (response) {
        confirmSubmit(response);

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (

    <div className="CreateTask">
      <h1><MdFormatListBulletedAdd /> Adicionar Tarefa</h1>
      <hr />

      <form className='form' onClick={(e) => e.preventDefault()}>

        <label htmlFor="name">Nome da Atividade: </label> <br/>
        <input type="text" name='name' id='name' placeholder='Ex: Limpar a casa'onChange={handleInput}/> <br/>
        
        <label htmlFor="priority">Selecione a prioridade: </label> 
        <select name="priority" onChange={handleInput}>
          <option value="1">Leve</option>
          <option value="2">Normal</option>
          <option value="3">Média</option>
          <option value="4">Importante</option>
          <option value="5">Urgente</option>
        </select>

        <div className="button">
          <button id='submit' onClick={()=>insertData()}>Cadastrar</button>
        </div>
        
      </form>

    </div>
  )
}

export default AddTask