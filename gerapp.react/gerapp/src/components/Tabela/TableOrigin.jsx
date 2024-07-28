import React from 'react'
import {
    Table,
    Th,
    Tr,
    Filter,
    Gear,
    PaginationContainer
} from './Tabela.module'
import {
    Previous,
    Next,
    ButtonContainer,
    ButtonNew
} from '../button/Button.module'
import { IoMdAdd } from "react-icons/io";

const TableOrigin = ({ isGear, isFilter, setGear, setFilter, listName, children, next, previous, navigate }) => {
    return (
        <>
            <PaginationContainer>
                <ButtonContainer>
                    <ButtonNew onClick={navigate}> <IoMdAdd /> Novo </ButtonNew>
                    <Previous onClick={previous} />
                    <Next onClick={next} />
                </ButtonContainer>
            </PaginationContainer>
            <Table>
                <thead>
                    <Tr>
                        {listName.map((item, index) => (
                            <Th key={index}>{item}</Th>
                        ))}
                        <Th>
                            <Filter onClick={() => { setFilter(!isFilter); setGear(false) }} />
                            <Gear onClick={() => { setGear(!isGear); setFilter(false) }} />
                        </Th>
                    </Tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </Table>
        </>
    )
}

export default TableOrigin