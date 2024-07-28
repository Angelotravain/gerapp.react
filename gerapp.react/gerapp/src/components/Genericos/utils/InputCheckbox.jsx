import React, { forwardRef } from 'react';
import {
    ContainerCheck,
    InputCheck
} from './InputStyled.module';

const InputCheckbox = forwardRef(({ id, type, label, onChange, onBlur, name, tamanho }, ref) => {
    return (
        <ContainerCheck>
            <label htmlFor={id} style={{ fontSize: '.9rem' }}>{label}</label>
            <InputCheck
                type={type}
                id={id}
                placeholder=" "
                ref={ref}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                tamanho={tamanho} />
        </ContainerCheck>
    )
})

export default InputCheckbox