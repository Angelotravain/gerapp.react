import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './Dropdown.css'

const Dropdown = ({ children, title }) => {

    const [open, setOpen] = useState(true);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <ul className={`${open ? 'open' : ''}`}>
            <li onClick={toggleDropdown}>
                <a className='space' href="#"><span>{title}</span> <span ><IoIosArrowDown /></span></a>
                <ul className={`${open ? 'display-none' : ''}`}>
                    {children}
                </ul>
            </li>
        </ul>
    )
}

export default Dropdown