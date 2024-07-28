import React from 'react'
import {
    Filter,
    Gear,
    ListContainer,
    ItemContainer,
    InformationContainer
} from './Tabela.module'
import {
    ButtonNew
} from '../button/Button.module'
import { IoMdAdd } from "react-icons/io";

const TableList = ({ isGear, isFilter, setGear, setFilter, children, navigate }) => {
    return (
        <ListContainer>
            <ItemContainer>
                <Filter onClick={() => { setFilter(!isFilter); setGear(false) }} />
                <Gear onClick={() => { setGear(!isGear); setFilter(false) }} />
                <ButtonNew onClick={navigate}> <IoMdAdd /> Novo </ButtonNew>
            </ItemContainer>
            <ItemContainer>
                <InformationContainer>
                    {children}
                </InformationContainer>
            </ItemContainer>
        </ListContainer>
    )
}

export default TableList