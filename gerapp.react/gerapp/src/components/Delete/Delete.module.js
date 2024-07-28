import styled from 'styled-components';
import { FaRegCheckCircle } from "react-icons/fa";

export const DeleteContainer = styled.div`
    width: 100%;
    height: 15vh;
    display: ${props => props.isDelete ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: ${props => props.theme.colors.background};
    z-index: 1000;
`;

export const TitleContainer = styled.div`
    padding: 10px;
    display: ${props => props.isDelete ? 'none' : 'block'};
`;

export const ButtonContainer = styled.div`
    display: ${props => props.isDelete ? 'none' : 'flex'};
    gap: 10px;
`;

export const ButtonDelete = styled.button`
    width: 80px;
    height: 40px;
    border: ${props => props.theme.colors.border};
    background-color: inherit;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.redColor};
    }
`;

export const ButtonCancel = styled.button`
    width: 80px;
    height: 40px;
    border: ${props => props.theme.colors.border};
    background-color: inherit;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }
`;

export const SpanReturn = styled.div`
    font-size: 1.5rem;
    display: ${props => props.isDelete ? 'block' : 'none'};
`;

export const CheckSuccess = styled(FaRegCheckCircle)`
    font-size: 1.5rem;
    background-color: ${props => props.theme.colors.greenColor};
    border-radius: 50%;
`;