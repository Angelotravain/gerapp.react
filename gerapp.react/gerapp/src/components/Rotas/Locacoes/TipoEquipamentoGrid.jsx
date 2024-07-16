import React from 'react'
import MontaGrid from '../../englobamento/MontaGrid'


const TipoEquipamentoGrid = () => {
    const link = 'https://localhost:4441/api/v1/gerapp/TipoEquipamento';
    const redirect = '/Cliente';
    const column = ['id', 'Descrição', 'Modelo', 'Tempo entre manutenção', '']
    const filter = 'descricao';
    return (
        <MontaGrid link={link} columns={column} filter={filter} redirect={redirect} />
    )
}

export default TipoEquipamentoGrid