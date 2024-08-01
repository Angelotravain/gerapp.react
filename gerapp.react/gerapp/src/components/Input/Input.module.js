import styled from 'styled-components';

export const InputCheck = styled.input.attrs({ type: 'checkbox' })`
    margin: 0 auto;
    accent-color: ${props => props.theme.colors.blue};
    width: 1.2rem;
    height: 1.2rem;
`;

export const InputContainer = styled.div`
    width: ${props => props.tamanho || '100px'};
    display: ${props => props.visible || ''};
    padding: 5px;
`;

export const ButtonInterForm = styled.button`
    height: 35px;
    margin: 15px;
    background-color: ${props => props.theme.colors.second};
    border: ${props => props.theme.colors.border};
    transition: border-color 0.3s;
    cursor: pointer;

    &:hover{
        border-color: ${props => props.theme.colors.blue};
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    background-color: ${props => props.theme.colors.second};
    border: ${props => props.theme.colors.border};
    outline: none;
    border-radius: 5px;
    transition: border-color 0.3s;

    &:focus{
        border-color: ${props => props.theme.colors.blue};
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 35px;
    background-color: ${props => props.theme.colors.second};
    border: ${props => props.theme.colors.border};
    outline: none;
    border-radius: 5px;
    transition: border-color 0.3s;

    &:focus{
        border-color: ${props => props.theme.colors.blue};
    }
`;
export const Label = styled.label`
    padding: 5px;
`;