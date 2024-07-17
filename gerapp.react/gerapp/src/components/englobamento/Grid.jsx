import React, { useState } from 'react'
import './Grid.css';
import { CiSearch } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
// import Table from 'react-bootstrap/Table';
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
// import Button from 'react-bootstrap/Button';
// import { deleteItem } from '../../data/cadastros/CrudGeneric';
// import Refresh from '../utils/Refresh';
// import Verdadeiro from './Verdadeiro';
// import Falso from './Falso';
// import Modal from '../modal/Modal';
import styled from 'styled-components'


const TableStyledWraper = styled.table`
        border-collapse: collapse;
    padding: 10px;
    text-align: left;
    border: ${props => props.theme.colors.bottom};
    width: 80dvw;
    margin: 0 auto;

    th{
        border-collapse: collapse;
        padding: 10px;
        text-align: left;
        border: ${props => props.theme.colors.bottom};
        
    }
    td{
        border-collapse: collapse;
        padding: 10px;
        text-align: left;
        border: ${props => props.theme.colors.bottom};
    }
`;

const IconEditButtonsStyled = styled(CiEdit)`
    background-color: ${props => props.theme.colors.buttonColor};
    color: ${props => props.theme.colors.texto};
    width:2.5rem;
    height: 2.5rem;
    padding: 5px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        opacity: .7;
    }
`;

const IconExcudeButtonStyled = styled(FaRegTrashAlt)`
        background-color: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.texto};
    width:2.5rem;
    height: 2.5rem;
    padding: 7px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        opacity: .7;
    }
`;

const InputCheckboxStyled = styled.input`
    font-size: 20px;
    width: 20px;
    height: 20px;
`;

const DivWarpper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DivWarpperTextAlign = styled.div`
    position: relative;
    height: 3rem;
    width: 100dvw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const DivWarpperTextFixed = styled.div`
    position: fixed;
`;

const Grid = () => {
    return (
        <div>
            <DivWarpperTextAlign>
                <DivWarpperTextFixed >
                    <input type="text" />
                    <CiSearch />
                    <IoAddOutline />
                </DivWarpperTextFixed>
            </DivWarpperTextAlign>
            <div>
                <TableStyledWraper>
                    <thead>
                        <tr>
                            <th>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </th>
                            <th>Id</th>
                            <th>nome</th>
                            <th>valor frete</th>
                            <th>Isenta frete</th>
                            <th>Cidade</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </td>
                            <th>1</th>
                            <th>parque morumbi</th>
                            <th>R$ 10,00</th>
                            <th>Sim</th>
                            <th>Paranavaí</th>
                            <th>
                                <IconEditButtonsStyled />
                                <IconExcudeButtonStyled />
                            </th>
                        </tr>
                    </tbody>
                </TableStyledWraper>
            </div>
        </div>
    );
}

export default Grid;