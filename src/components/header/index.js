import React from "react";
import "./style.css";
import logo from "../../pic/logo.svg"
import bell from "../../pic/bell.svg"
import nama from "../../pic/SusenoSulistyawan.svg"
import fotoprofil from "../../pic/foto-profil.svg"


function Header () {
    return (
        <div className="container">
        <div className="header">
        <img className="logo" src={bell} />
             <img className="logo" src={nama} />
             <img className="logo" src={fotoprofil} />
             <img className="logo" src={logo} />
        </div>
            
          
        </div>
      );
    
};

export default Header;