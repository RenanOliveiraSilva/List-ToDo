import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

//Icons
import { IoHome } from "react-icons/io5";

function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo do site"/>
            </div>
            <div className="content">
                <ul>

                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar