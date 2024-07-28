import React, { useState } from 'react'
import {
    DropContainer,
    DropTitle,
    DropModal,
    LinkButtonModal,
    DropModalLink
} from './Dropdown.module'
import {
    IoIosArrowForward,
    IoIosArrowDown,
    IoMdPeople
} from "react-icons/io";
import { FaStreetView } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdCorporateFare } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";

const Dropdown = ({ title, icon, children }) => {
    const [isOpen, setIsOpen] = useState();
    return (
        <div>
            <DropContainer onClick={() => setIsOpen(!isOpen)}>
                <div></div>
                <DropTitle>{icon} {title} {!isOpen ? <IoIosArrowForward /> : <IoIosArrowDown />}</DropTitle>
            </DropContainer>
            <DropModal isOpen={isOpen}>
                {children}
            </DropModal>
        </div>
    )
}

export default Dropdown