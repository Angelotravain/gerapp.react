import React from 'react';
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";


const OPEN_MENU_STYLED = {
    fontSize: '3rem',
    color: '#fff',
    padding: '10px',
    marginRight: '90%',
    cursor: 'pointer',
    flex: '4'
}

const ACTION_BUTTON_END = {
    fontSize: '3rem',
    color: '#fff',
    padding: '10px',
    textAlign: 'end',
    cursor: 'pointer',
}

const STYLED_COMPONENT = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const NAV_STYLED = {
    backgroundColor: '#2d2d2d',
    borderBottom: '1px solid #3d3d3d',
    display: 'block',
    zIndex: '0'
}

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav style={NAV_STYLED}>
            <div style={STYLED_COMPONENT}>
                <FiMenu style={OPEN_MENU_STYLED} onClick={toggleSidebar} />
                <FaShoppingCart style={ACTION_BUTTON_END} />
                <FaRocketchat style={ACTION_BUTTON_END} />
            </div>
        </nav>
    )
}

export default Navbar