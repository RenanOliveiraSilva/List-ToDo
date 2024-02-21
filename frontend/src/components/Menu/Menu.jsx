import React from 'react'
import "./Menu.css"
import { Link } from "react-router-dom"

function Menu() {
  return (
    <div className="Menu">
        <ul>
            <Link to={"/"}>
              <li><h2>Todas as Tarefas</h2></li>  
            </Link>
            <Link to={"/PendingTasks"}>
              <li><h2>Tarefas Pendentes</h2></li>

            </Link>
            <Link to={"/CompletedTasks"}>
              <li><h2>Tarefas Concluídas</h2></li>

            </Link>
            <Link to={"/AddTask"}>
              <li><h2>Criar Tarefa</h2></li>
            
            </Link>
        </ul>
    </div>
  )
}

export default Menu