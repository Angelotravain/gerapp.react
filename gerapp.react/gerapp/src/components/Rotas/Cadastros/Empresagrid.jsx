import React from 'react'
import Grid from '../../englobamento/Grid'
import { useState, useEffect } from 'react'
import Loading from '../../loading/Loading';
import ImagemErro from '../../loading/ImagemErro';
import { getItens } from '../../../data/cadastros/CrudGeneric';

const Empresagrid = () => {
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const link = 'https://localhost:4441/api/v1/gerapp/Empresa';


    console.log(link);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItens({ link });
                setEmpresas(data);
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
        <Grid itens={empresas} redirect={'/Cliente'} columns={['id', 'Nome', 'CNPJ', 'Telefone', 'E-mail']} filterEntry={'nome'} link={link} />
    )
}

export default Empresagrid