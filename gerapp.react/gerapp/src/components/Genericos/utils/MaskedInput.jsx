import React from 'react'
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import { Label, InputContainer } from '../../Input/Input.module';

const Masked = styled(InputMask)`
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
const MaskedInput = ({ maskEdit, value, onChange, nameInput, tamanho, label }) => {
    return (
        <InputContainer tamanho={tamanho}>
            <Label>{label}</Label>
            <Masked
                mask={maskEdit}
                value={value}
                onChange={onChange}
                placeholder={nameInput} />
        </InputContainer>
    )
}

export default MaskedInput