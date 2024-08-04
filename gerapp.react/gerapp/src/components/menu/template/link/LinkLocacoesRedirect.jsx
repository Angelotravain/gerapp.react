import React from 'react'
import {
    LinkButtonModal,
    DropModalLink
} from '../../dropdown/Dropdown.module'
import { GrDeliver } from "react-icons/gr";
import { FaTable } from "react-icons/fa6";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";

const LinkLocacoesRedirect = () => {
    return (
        <div>
            <DropModalLink>
                <LinkButtonModal to='/Equipamentos' onClick={() => setOpen(false)}><FaToolbox /> Equipamentos</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal to='/Locacao' onClick={() => setOpen(false)}><FaTable /> Locações</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal to='/TipoEquipamento' onClick={() => setOpen(false)}><MdOutlineTableRestaurant /> Tipo de equipamentos</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal to='/Veiculo' onClick={() => setOpen(false)}><GrDeliver /> Veículos</LinkButtonModal>
            </DropModalLink>
        </div>
    )
}

export default LinkLocacoesRedirect