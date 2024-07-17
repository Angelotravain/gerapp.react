import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {
    ButtonDropDownStyled,
    ListDropDrawer,
    DropWrapper,
    ListInternalDropDown
} from './Dropdown.module';

const Dropdown = ({ children, title, icon }) => {

    const [open, setOpen] = useState(true);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <DropWrapper onClick={toggleDropdown}>
            <ListDropDrawer>
                <ButtonDropDownStyled>
                    <div>{icon}{title}{open ? <IoIosArrowForward /> : <IoIosArrowDown />}</div>
                </ButtonDropDownStyled>
                <ListInternalDropDown isOpen={open}>
                    {children}
                </ListInternalDropDown>
            </ListDropDrawer>
        </DropWrapper>
    )
}

export default Dropdown