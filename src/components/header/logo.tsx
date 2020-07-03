import '../../App.css';
import React from "react"
import Logos from "../../assets/Images/logo.png"
function Logo() {
    return (
        <div className="logo">
            <img className="logo-img" src={Logos} alt="" />
        </div>
    );
}

export default Logo;