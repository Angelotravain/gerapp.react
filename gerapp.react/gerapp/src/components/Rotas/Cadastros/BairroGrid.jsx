import { getBairros } from '../../../data/cadastros/BairroCadastro';
import Grid from '../../englobamento/Grid'
import { useState, useEffect } from 'react'

// Esse valor vai vir da API
const BairroGrid = () => {

    const [bairros, setBairros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const link = 'https://localhost:4441/api/v1/gerapp/Bairro'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBairros({ link });
                setBairros(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <Grid itens={bairros} redirect={'/Cliente'} columns={['id', 'Nome', 'Valor frete', 'Isenta frete', 'Cidade']} filterEntry={'nome'} link={link} />
    )
}

export default BairroGrid