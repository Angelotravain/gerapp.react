import styled from 'styled-components'
import {
    GrPrevious,
    GrNext
} from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
export const Previous = styled(GrPrevious)`
    font-size: 1.5rem;
    padding: 3%;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.hover};
        border-radius: 5%;
    }
`;

export const Next = styled(GrNext)`
    font-size: 1.5rem;
    padding: 3%;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.hover};
        border-radius: 5%;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
    justify-content: flex-end;
`;

export const ButtonDelete = styled(MdDeleteOutline)`
    font-size: 40px;
    padding: 3%;
    color: ${props => props.theme.colors.redColor};
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.redColor};
        color: ${props => props.theme.colors.primary};
        border-radius: 5%;
    }

    @media (min-width:1200px) {
        font-size: 50px;
    }
`;

export const ButtonNew = styled.button`
    font-size: 1rem;
    padding: 3%;
    width: 80%;
    text-align: center;
    margin-right: 15px;
    border: ${props => props.theme.colors.border};
    background-color: transparent;
    cursor: pointer;

    &:hover{
        border: 1px solid ${props => props.theme.colors.blue};
        border-radius: 5%;
    }
`;

export const ButtonForm = styled.button`
    width: 15%;
    height: 40px;
     margin: 5px;
    border: ${props => props.theme.colors.border};
    background-color: transparent;
    cursor: pointer;

    &:hover{
        border: 1px solid ${props => props.save ? props.theme.colors.blue : props.theme.colors.hover};
        background-color: ${props => props.save ? 'transparent' : props.theme.colors.hover};
        border-radius: 5%;
    }
`;