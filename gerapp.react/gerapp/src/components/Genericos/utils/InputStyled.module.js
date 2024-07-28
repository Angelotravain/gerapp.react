import styled from 'styled-components'


export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
    height: 35px;
    width: ${props => props.tamanho ? props.tamanho : '90%'};
    border-radius: 5px;
    font-size: 1rem;
    box-sizing: border-box;
    padding: 0.5rem;
    margin: 0.2rem;
    display: ${props => props.display || ''};
        &:focus + label,
        &:not(:placeholder-shown) + label {
            top: -0.75rem;
            left: 0.5rem;
            font-size: 0.75rem;
            color: ${props => props.theme.colors.fundo};
        }
`;

export const Label = styled.label`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-size: .9rem;
    pointer-events: none;
    transition: all 0.2s ease-out;
    background: transparent;
    padding: 0 0.25rem;
    display: ${props => props.display || ''};
`;

export const InputCheck = styled.input.attrs({ type: 'checkbox' })`
     height: 25px;
     width: ${props => props.tamanho || '25px'};
     margin: 0.2rem;
`;

export const ContainerCheck = styled.div`
    height: 35px;
    width: 80px;
    accent-color: ${props => props.theme.colors.hover};
    display: flex;
    align-items: center;
`;