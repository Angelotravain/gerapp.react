import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import {
    DivInternStyledComponent,
    NavStyledWrapper,
    IconMenuStyle,
    DivAlignItensStyled
} from './NavStyled.module'

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
                <IconMenuStyle onClick={toggleSidebar} />
                <DivAlignItensStyled>
                    <FaShoppingCart style={ACTION_BUTTON_END} />
                    <FaRocketchat style={ACTION_BUTTON_END} />
                </DivAlignItensStyled>
            </DivInternStyledComponent>
        </NavStyledWrapper>
    )
}

export default Navbar