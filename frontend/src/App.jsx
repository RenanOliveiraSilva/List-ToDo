import { Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Menu from './components/Menu/Menu'


function App() {

  return (
    <div className="App">
        <Navbar />

      <div className="container">
        <div className="side">
          <Menu />
        </div>

        <div className="main">
          <Outlet />

        </div>

      </div>


    </div>

  )
}

export default App
