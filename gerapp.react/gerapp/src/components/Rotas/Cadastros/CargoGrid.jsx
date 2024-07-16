import React from 'react'
import Grid from '../../englobamento/Grid'
import { useState, useEffect } from 'react'
import Loading from '../../loading/Loading';
import ImagemErro from '../../loading/ImagemErro';
import { getItens } from '../../../data/cadastros/CrudGeneric';

const CargoGrid = () => {

    const [cargos, setCargos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const link = 'https://localhost:4441/api/v1/gerapp/Cargo';


    console.log(link);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItens({ link });
                setCargos(data);
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
        <Grid itens={cargos} redirect={'/Cliente'} columns={['id', 'Descrição', 'Acessa cadastros', 'Acessa financeiro', 'Acessa locação']} filterEntry={'descricao'} link={link} />
    )
}

export default CargoGrid