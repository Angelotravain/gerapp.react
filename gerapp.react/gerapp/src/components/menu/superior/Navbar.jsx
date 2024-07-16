import React from 'react';
import './Navbar.css';
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav>
            <FiMenu id='OpenMenu' onClick={toggleSidebar} />
        </nav>
    )
}

export default Navbar