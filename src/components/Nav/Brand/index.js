import React from "react";
import "./Brand.css";
import Logo from "../../../assets/brand/stylized_z.jpg"

function Brand() {
    return (
        <div>
            <img src={Logo} className="brand"/>
        </div>
    )
}

export default Brand;
