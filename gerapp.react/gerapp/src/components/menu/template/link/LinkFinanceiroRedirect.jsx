import React from 'react'
import { BsPiggyBank } from "react-icons/bs";
import { MdPix } from "react-icons/md";
import {
    LinkButtonModal,
    DropModalLink
} from '../../dropdown/Dropdown.module'

const LinkFinanceiroRedirect = () => {
    return (
        <div>
            <DropModalLink>
                <LinkButtonModal to='/ContasAReceber' onClick={() => setOpen(false)}><BsPiggyBank /> Contas a receber</LinkButtonModal>
            </DropModalLink>
            <DropModalLink>
                <LinkButtonModal to='/FormaPagamento' onClick={() => setOpen(false)}><MdPix /> Formas de pagamento</LinkButtonModal>
            </DropModalLink>
        </div>
    )
}

export default LinkFinanceiroRedirect