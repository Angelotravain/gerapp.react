import { CiSearch } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import styled from 'styled-components';

export const TableStyledWraper = styled.table`
    border-collapse: collapse;
    padding: 10px;
    text-align: left;
    border-bottom: ${props => props.theme.colors.bottom};
    width: 80dvw;
    margin: 0 auto;

    th {
        border-collapse: collapse;
        padding: 10px;
        text-align: left;
        border-bottom: ${props => props.theme.colors.bottom};
    }
    td {
        border-collapse: collapse;
        padding: 10px;
        text-align: left;
        border-bottom: ${props => props.theme.colors.bottom};
    }
`;
export const IconEditButtonsStyled = styled(CiEdit)`
    background-color: ${props => props.theme.colors.buttonColor};
    color: ${props => props.theme.colors.texto};
    width:2.5rem;
    height: 2.5rem;
    padding: 5px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`;
export const IconExcudeButtonStyled = styled(FaRegTrashAlt)`
    background-color: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.texto};
    width:2.5rem;
    height: 2.5rem;
    padding: 7px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`;
export const InputCheckboxStyled = styled.input`
    font-size: 20px;
    width: 20px;
    height: 20px;
`;
export const DivWarpper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const DivWarpperTextAlign = styled.div`
    height: 5rem;
    width: 100dvw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const DivWarpperTextFixed = styled.div`
    width: 80%;
    height: 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
        width: 80%;
        font-size: 1.5rem;
        border-radius: 5px;

        @media(min-width:1000px){
            height: 40px;
        }
    }
`;
export const IconSearchStyled = styled(CiSearch)`
    width: 50px;
    height: 30px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.buttonColor};
    color: ${props => props.theme.colors.texto};
    cursor: pointer;

    @media(min-width:1000px){
        width: 80px;
        height: 40px;
    }
    &:hover {
        opacity: .7;
    }
`;
export const IconAddItemStyled = styled(IoAddOutline)`
    width: 50px;
    height: 30px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.success};
    color: ${props => props.theme.colors.texto};
    cursor: pointer;

    
    @media(min-width:1000px){
        width: 80px;
        height: 40px;
    }

    &:hover {
        opacity: .7;
    }
`;

export const TableHeaderItenStyled = styled.th`
    @media(max-width: 400px){
        display: none;
    }
`;

export const TableDataItenStyled = styled.th`
    @media(max-width: 400px){
        display: none;
    }
`;
export const ConfirmButtonStyled = styled.div`
        display: 'flex';
        align-items: 'center';
        justify-content: 'center';
        gap: '20px';
        padding-top: '10px'
`;

export const WarningSpanStyled = styled.div`
    background-color: ${props => props.theme.colors.warning};
    width: 85%;
    border-radius: 10px;
    height: 80px;
    margin: 0 auto;
    margin-top: 5px;
    color: ${props => props.theme.colors.texto};
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;
    flex-direction: column;
    font-size: 20px;

    div{
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;

        button{
                color: ${props => props.theme.colors.texto};
                width: 80px;
                height: 40px;
                font-size: 15px;
                padding: 5px;
                font-weight: bold;
                border-radius: 5px;
                background-color: ${props => props.theme.colors.fundo};
                border: none;

                &:hover{
                    opacity: .7;
                }
        }
    }
`;