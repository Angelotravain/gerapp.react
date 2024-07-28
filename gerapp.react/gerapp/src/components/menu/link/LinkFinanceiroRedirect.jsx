import React from 'react'
import { BsPiggyBank } from "react-icons/bs";
import { MdPix } from "react-icons/md";
import {
    LinkButtonModal,
    DropModalLink
} from '../dropdown/Dropdown.module'

const LinkFinanceiroRedirect = () => {
    return (
        <div>
            <DropModalLink>
                <LinkButtonModal href='/ContasAReceber'><BsPiggyBank /> Contas a receber</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal href='/Cargo'><MdPix /> Formas de pagamento</LinkButtonModal>
            </DropModalLink>
        </div>
    )
}

export default LinkFinanceiroRedirect