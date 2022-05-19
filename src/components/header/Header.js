import React from 'react';
import "./Header.css";
import logo from "../../images/logo.png";
import { MdNotifications } from 'react-icons/md';
const Header = (props) => {
    return (
        <div className="header">
                <div className="logo">
                    <img src={logo} alt="no image found" style={{maxHeight:"50px"}}/>
                    </div>
                <div className="headerRight">
                    <p className="headerItems">Home</p>
                    <p className="headerItems">About</p>
                    <p className="headerItems">Community</p>
                    <p className="headerItems">Contact Us</p>
                    <p className="headerItems"><MdNotifications/></p>
                    <p className="headerItems">Logout</p>
                </div>
        </div>
    );
};

export default Header;