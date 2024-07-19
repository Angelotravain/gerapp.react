import styled from 'styled-components'



export const LabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1rem;
    
    font-weight: bold;
`;
export const Input3Styled = styled.input`
    width: ${props => props.tamanho || '10%'};
    height: 30px;
    font-size: 20px;
    border: none;
    border: ${props => props.theme.colors.bottom};
    color: ${props => props.theme.colors.fundo};
    display: block;
    cursor: pointer;
    border-radius: 2px;
`;

export const FormStyle = styled.form`
    width: 100%;
    height: 100%;
    background-color: red;
`;