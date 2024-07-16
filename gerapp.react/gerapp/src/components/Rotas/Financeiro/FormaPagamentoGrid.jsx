import React from 'react'
import MontaGrid from '../../englobamento/MontaGrid'

const FormaPagamentoGrid = () => {
    const link = 'https://localhost:4441/api/v1/gerapp/FormaPagamento';
    const redirect = '/Cliente';
    const column = ['id', 'Descrição', 'Crédito', 'Débito', 'A vista']
    const filter = 'descricao';
    return (
        <MontaGrid link={link} columns={column} filter={filter} redirect={redirect} />
    )
}

export default FormaPagamentoGrid