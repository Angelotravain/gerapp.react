import React from 'react'
import { useState, useEffect } from 'react'
import Grid from './TBody';
import Loading from '../loading/Loading';
import ImagemErro from '../loading/ImagemErro';
import { getItens } from '../data/cadastros/CrudGeneric';

const MontaGrid = ({ link, columns, filter, redirect }) => {
    const [itens, setItens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItens({ link });
                setItens(data);
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
        <Grid itens={itens} redirect={redirect} columns={columns} filterEntry={filter} link={link} />
    )
}

export default MontaGrid