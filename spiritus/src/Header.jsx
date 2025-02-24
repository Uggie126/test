import React from "react";
import logo from "/logo.png"
import "./Header.css"

const Header = ({scrollToContact}) => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo"/>
            <button onClick={scrollToContact} className="contact-btn">CONTACT</button>
        </header> 
    )
}

export default Header;