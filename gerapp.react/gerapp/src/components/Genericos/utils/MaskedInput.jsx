import React from 'react'
import InputMask from 'react-input-mask';

const MaskedInput = ({ maskEdit, value, onChange, nameInput, tamanho, label }) => {
    return (
        <div>
            <label style={{ padding: '0 0.25rem', fontSize: '.8rem' }}>{label}</label>
            <InputMask
                mask={maskEdit}
                value={value}
                onChange={onChange}
                placeholder={nameInput}
                style={{
                    height: '35px',
                    width: tamanho || '90%',
                    margin: '.2rem',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    padding: '0.5rem'
                }} />
        </div>
    )
}

export default MaskedInput