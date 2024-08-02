import React, { useState, useEffect } from 'react';
import { Input } from '../../Input/Input.module';

const ValorInput = ({ value, onValueChange }) => {
    const [inputValue, setInputValue] = useState(value);

    const formatValue = (value) => {

        const cleanValue = value.replace(/[^\d]/g, '');
        const integerPart = cleanValue.slice(0, -2).replace(/^0+/, '') || '0';
        const decimalPart = cleanValue.slice(-2).padStart(2, '0');
        const formattedValue = `${integerPart},${decimalPart}`;
        return `R$ ${formattedValue}`;
    };

    useEffect(() => {
        if (value !== undefined && value !== null) {
            setInputValue(formatValue(value));
        }
    }, [value]);

    const handleChange = (event) => {
        let newValue = event.target.value;
        newValue = newValue.replace('R$ ', '').replace(/\./g, '').replace(/,/g, '');
        if (newValue.length > 2) {
            newValue = `${newValue.slice(0, newValue.length - 2)},${newValue.slice(-2)}`;
        } else {
            newValue = `0,${newValue.padStart(2, '0')}`;
        }

        const formattedValue = formatValue(newValue);
        setInputValue(formattedValue);
        onValueChange(newValue.replace(',', '.'));
    };

    return (
        <Input
            type="text"
            value={inputValue}
            onChange={handleChange}
        />
    );
};

export default ValorInput;
