import React from "react";
import logo from '../assets/images/logo.png';



const Header = () => {


    return(
<header className="hdr-cntr">
<div className="logo-cntr">
<img src ={logo} alt="stock market bull" className="logo-img"/>
</div>
<div>
<h1 className = "header-text">STOCK PORTFOLIO DASHBOARD</h1> 
</div>
</header>

    )
}

export default Header;