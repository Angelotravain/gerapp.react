import React from 'react'
import { IoMdClose } from "react-icons/io";
import styled from 'styled-components'

const DivWrapperStyled = styled.div`
position: relative;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgb(0,0,0,0.7);
z-index: 1000;
`;


const ModalStyled = styled.div`
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    padding: 60px;
    background-color: ${props => props.theme.colors.fundo};
    border-radius: 10px;
    color: ${props => props.theme.colors.texto};
    overflow-x: auto;
`;
const CLOSE_STYLE = {
    cursor: 'pointer',
    right: '0',
    position: 'absolute',
    top: '10',
    right: '10',
    fontWeight: 'bold',
    fontSize: '30px'
}

const IconCloseButtonStyled = styled(IoMdClose)`
    cursor: pointer;
    right: 0;
    position: absolute;
    top: 10;
    right: 10;
    font-weight: bold;
    font-size: 30px;
`;

export default function Modal({ open, setModalOpen, children }) {
    if (open) {
        return (
            <DivWrapperStyled style={{ display: 'none' }}>
                <ModalStyled>
                    <IconCloseButtonStyled onClick={setModalOpen(!open)} />
                    <div>{children}</div>
                </ModalStyled>
            </DivWrapperStyled>
        )
    }
    return null;
}
