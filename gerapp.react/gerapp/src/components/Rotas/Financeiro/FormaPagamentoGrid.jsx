import React from 'react'

const FormaPagamentoGrid = () => {
    const link = 'https://localhost:4441/api/v1/gerapp/FormaPagamento';
    const redirect = '/Cliente';
    const column = ['id', 'Descrição', 'Crédito', 'Débito', 'A vista']
    const filter = 'descricao';
    return (
        <div>
            forma pagamento
        </div>
    )
}

export default FormaPagamentoGrid