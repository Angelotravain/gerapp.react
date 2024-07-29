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
                <LinkButtonModal href='/Equipamentos'><FaToolbox /> Equipamentos</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal href='/Locacao'><FaTable /> Locações</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal href='/TipoEquipamento'><MdOutlineTableRestaurant /> Tipo de equipamentos</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal href='/Veiculo'><GrDeliver /> Veículos</LinkButtonModal>
            </DropModalLink>
        </div>
    )
}

export default LinkLocacoesRedirect