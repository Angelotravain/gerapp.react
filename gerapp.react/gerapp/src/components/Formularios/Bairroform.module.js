import styled from 'styled-components'
import { IoMdClose } from "react-icons/io";

export const DivWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0, 0.7);
    z-index: 1000;
`;

export const IconCloseButtonStyled = styled(IoMdClose)`
    cursor: pointer;
    background-color: ${props => props.theme.colors.error};
    margin: 5px;
    color: ${props => props.theme.colors.texto};
    border-radius: 5px;
    font-weight: bold;
    font-size: 30px;
`;

export const DivHeadModalStyled = styled.div`
    border-bottom:${props => props.theme.colors.bottom};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 5px;
`;

export const DivContentStyled = styled.div`
    padding: 60px;
`;

export const DivModal = styled.div`
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background-color: ${props => props.theme.colors.texto};
    border-radius: 10px;
    color: #000;
    overflow-x: auto;
`;

export const DivDropDown = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 10%;

    input{
        height: 25px;
        border-radius: 5px;
        border: none;
    }
    div{
        background-color: ${props => props.theme.colors.texto};
        display: none;
    }
`;