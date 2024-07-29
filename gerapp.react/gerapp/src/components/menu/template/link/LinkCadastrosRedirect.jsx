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

const LinkCadastrosRedirect = () => {
    return (
        <div>
            <DropModalLink>
                <LinkButtonModal href='/Bairro'><FaStreetView /> Bairros</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal href='/Cargo'><GiPoliceOfficerHead /> Cargos</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal href='/Cliente'><IoMdPeople /> Clientes</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal href='/Empresa'><MdCorporateFare /> Empresa</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal href='/Funcionario'><GrUserManager /> Funcionários</LinkButtonModal>
            </DropModalLink>
        </div>
    )
}

export default LinkCadastrosRedirect