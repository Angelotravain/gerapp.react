import React from 'react'
import Refresh from '../utils/Refresh';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 70%;
    height: 60px;
    background-color: ${props => props.theme.colors.second};
    border: ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.texto};
        font-size: 30px;cursor: pointer;
    &:hover{
        border: 1px solid ${props => props.theme.colors.blue};
    }
`;
const ImagemErro = () => {
    return (
        <div style={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '5px', border: '1px solid #000', backgroundColor: '#000' }}>
            <h2 style={{ fontSize: '40px' }}>É raro, mas acontece com frequência...</h2>
            <img style={{ width: '400px', height: '400px' }} src='https://i.pinimg.com/originals/57/72/b8/5772b80eafd3ec4bea9f42a36db6f601.gif'></img>
            <ButtonStyled onClick={Refresh}>
                Antes de chamar o suporte, tente denovo!
            </ButtonStyled>
        </div>
    )
}

export default ImagemErro