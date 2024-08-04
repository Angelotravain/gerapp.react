import React from 'react'
import { IoMdPeople } from "react-icons/io";
import { FaStreetView } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdCorporateFare } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import {
    LinkButtonModal,
    DropModalLink
} from '../../dropdown/Dropdown.module'

const LinkCadastrosRedirect = ({ setOpen }) => {
    return (
        <div>
            <DropModalLink>
                <LinkButtonModal to='/Bairro' onClick={() => setOpen(false)}><FaStreetView /> Bairros</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal to='/Cargo' onClick={() => setOpen(false)}><GiPoliceOfficerHead /> Cargos</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal to='/Cliente' onClick={() => setOpen(false)}><IoMdPeople /> Clientes</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal to='/Empresa' onClick={() => setOpen(false)}><MdCorporateFare /> Empresa</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal to='/Funcionario' onClick={() => setOpen(false)}><GrUserManager /> Funcionários</LinkButtonModal>
            </DropModalLink>
        </div>
    )
}

export default LinkCadastrosRedirect