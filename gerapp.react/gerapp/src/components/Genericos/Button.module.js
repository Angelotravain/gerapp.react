import styled from 'styled-components'

export const ButtonStyled = styled.button`
    width: ${props => props.width || '70px'};
    height: ${props => props.height || '40px'};
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.corFundo || props.theme.colors.success};;
    color: ${props => props.theme.colors.texto};
    margin-right:10px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    
    &:hover{
        opacity: .7;
    }
`;