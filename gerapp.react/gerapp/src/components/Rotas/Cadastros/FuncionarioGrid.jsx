import React from 'react'
import Grid from '../../englobamento/Grid'
import { useState, useEffect } from 'react'
import Loading from '../../loading/Loading';
import ImagemErro from '../../loading/ImagemErro';
import { getItens } from '../../../data/cadastros/CrudGeneric';

const FuncionarioGrid = () => {
    const [funcionarios, setFuncionarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const link = 'https://localhost:4441/api/v1/gerapp/Funcionario';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItens({ link });
                setFuncionarios(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <Loading />;
    if (error) return <ImagemErro />


    return (
        <Grid itens={funcionarios} redirect={'/Cliente'} columns={['id', 'Nome', 'Salário', 'Empresa', 'Cargo']} filterEntry={'nome'} link={link} />
    )
}

export default FuncionarioGrid