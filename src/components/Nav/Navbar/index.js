import React from "react";
import Login from "../UserButton";
import "./Navbar.css";

function Navbar() {
    return (
        <ul className="navbar">
            <li>
                Início
            </li>
            <li>
                Categorias
            </li>
            <li>
                Contato
            </li>
            <li>
                <Login />
            </li>
        </ul>
    )
}

export default Navbar;
