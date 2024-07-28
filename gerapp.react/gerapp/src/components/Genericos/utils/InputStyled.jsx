import React, { forwardRef } from 'react';
import {
    InputContainer,
    Input,
    Label
} from './InputStyled.module';

const InputStyled = forwardRef(({ id, type, label, onChange, onBlur, name, tamanho, display }, ref) => (
    <InputContainer>
        <Input
            type={type}
            id={id}
            placeholder=" "
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            tamanho={tamanho}
            display={display}
        />
        <Label htmlFor={id} display={display}>{label}</Label>
    </InputContainer>
));

export default InputStyled;
