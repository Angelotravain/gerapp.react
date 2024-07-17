import React from 'react';
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { DivInternStyledComponent, NavStyledWrapper } from './NavStyled.module'


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

const Navbar = ({ toggleSidebar }) => {
    return (
        <NavStyledWrapper>
            <DivInternStyledComponent>
                <FiMenu style={OPEN_MENU_STYLED} onClick={toggleSidebar} />
                <FaShoppingCart style={ACTION_BUTTON_END} />
                <FaRocketchat style={ACTION_BUTTON_END} />
            </DivInternStyledComponent>
        </NavStyledWrapper>
    )
}

export default Navbar