import React, { useState, useEffect } from 'react';
import FormStyled from '../FormStyled'
import { getItens, getItensById } from '../../data/cadastros/CrudGeneric';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';

export default function BairroForm() {
    const [cidades, setCidades] = useState([]);
    const [filteredCidades, setFilteredCidades] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log('sub meteu haha');

    useEffect(() => {

        if (data !== null) {
            setValue('id', data.id);
            setValue('nome', data.nome);
            setValue('isentaFrete', data.isentaFrete);
            setValue('valorFrete', data.valorFrete);
            setValue('cidade', data.cidade.nome);
            setValue('cidadeId', data.cidade.id);
        }
    }, []);

    useEffect(() => {
        if (filter === '') {
            setFilteredCidades([]);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getItens('Cidade');
                const filtered = data.filter(cidade =>
                    cidade.nome.toLowerCase().includes(filter.toLowerCase()) ||
                    cidade.id.toString().includes(filter)
                );
                setFilteredCidades(filtered);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [filter]);

    const handleInputChange = (e) => {
        setFilter(e.target.value);
    };

    const handleItemClick = (cidade) => {
        setValue('cidadeId', cidade.id);
        setValue('cidade', cidade.nome);
        setFilteredCidades([]);
        setFilter('');
    };

    const returnValues = () => {
        return {
            id: watch('id') || 0,
            nome: watch('nome'),
            valorFrete: watch('valorFrete'),
            isentaFrete: watch('isentaFrete'),
            cidadeId: watch('cidadeId')
        };
    }

    return (
        <FormStyled linkReturn={'/Bairro'} nameLinkReturn={'Bairro'} data={[]} linkSaveOrEdit={'Bairro'} model={returnValues()}>
            <div>
                <label htmlFor="id" disabled >Código</label>
                <input type="text" id='id' {...register('id')} disabled />
            </div>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id='nome' {...register('nome')} required:true />
            </div>
            <div>
                <label htmlFor="valorFrete">Valor do frete</label>
                <input type="text" id='valorFrete' {...register('valorFrete')} />
            </div>
            <div>
                <div>
                    <label htmlFor="isentaFrete">Isenta Frete?</label>
                    <input type="checkbox" id='isentaFrete' {...register('isentaFrete')} />
                </div>
            </div>
            <div>
                <label htmlFor="cidade">Cidade</label>
                <span {...register('cidadeId')}></span>
                <input
                    type="text"
                    id='cidade'
                    {...register('cidade')}
                    onChange={handleInputChange}
                />
                {filter && filteredCidades.length > 0 && (
                    <ul>
                        {filteredCidades.map((cidade, index) => (
                            <li key={index} onClick={() => handleItemClick(cidade)}>
                                {cidade.id} - {cidade.nome}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </FormStyled>
    )
}
