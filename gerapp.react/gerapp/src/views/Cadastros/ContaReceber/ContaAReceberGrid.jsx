import React, { useState } from 'react'
import { TableContainer, TableFilter } from '../../../components/Tabela/Tabela.module'
import { Input, InputContainer, Label } from '../../../components/Input/Input.module'

const ContaAReceberGrid = () => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value;
            setInputValue(value);
            debouncedFilter(value);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        console.log(value.toString());
        setInputValue(value);
        debouncedFilter(value);
    };

    return (
        <TableContainer>
            <TableFilter isFilter='true'>
                <InputContainer tamanho='30%'>
                    <Label>Filtrar por data</Label>
                    <Input
                        type="date"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress} />
                </InputContainer>
                <InputContainer tamanho='30%'>
                    <Label>Filtrar todos do mês</Label>
                    <input type="radio" />
                    <br />
                    <Label>trazer tudo</Label>
                    <input type="radio" />
                </InputContainer>
            </TableFilter>
        </TableContainer>
    )
}

export default ContaAReceberGrid