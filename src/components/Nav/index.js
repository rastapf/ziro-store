import React from "react";
import Brand from "./Brand";
import Navbar from "./Navbar";
import "./Nav.css";

function Nav() {
    return (
        <div className="nav">
            <Brand />
            <Navbar />            
        </div>
    )
}

export default Nav;
