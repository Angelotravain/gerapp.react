import React from 'react'
import Refresh from '../genericos/utils/Refresh';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 70%;
    height: 60px;
    background-color: ${props => props.theme.colors.fundo};
    color: ${props => props.theme.colors.texto};
    font-size: 30px;
`;
const ImagemErro = () => {
    return (
        <div style={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '5px', border: '1px solid #000', backgroundColor: '#fff' }}>
            <h2 style={{ fontSize: '40px' }}>Se não vai funcionar, bora pescar...</h2>
            <img style={{ width: '400px', height: '400px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCxjgApmnxAKdqaCsOWuUlfRarV9edd9qdg&s'></img>
            <ButtonStyled onClick={Refresh}>
                Antes de bater o ponto, tente denovo!
            </ButtonStyled>
        </div>
    )
}

export default ImagemErro