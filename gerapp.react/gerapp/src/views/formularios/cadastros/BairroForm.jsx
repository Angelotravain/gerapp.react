import React, { useState, useEffect } from 'react'
import { TableContainer } from '../../../components/Tabela/Tabela.module'
import {
    FormContainer,
    FormActionContainer,
    UnodernedList,
    Li
} from '../../../components/form/Form.module';
import { ButtonForm } from '../../../components/button/Button.module'
import {
    InputCheck,
    InputContainer,
    Input,
    Label
} from '../../../components/Input/Input.module'
import { useForm, Controller } from "react-hook-form";
import {
    useLocation,
    useNavigate
} from 'react-router-dom';
import {
    getItens,
    updateItem,
    insertItem
} from '../../../services/httpRequest';
import ValorInput from '../../../components/Genericos/utils/ValorInput';
import {
    SuccessIcon,
    ReturnMessage
} from '../FormStyled.module'

const BairroForm = () => {
    const [cidades, setCidades] = useState([]);
    const [filteredCidades, setFilteredCidades] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;
    const [messageReturn, setMessageReturn] = useState('');
    const navigate = useNavigate();

    const {
        register,
        control,
        watch,
        setValue,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = async (formData) => {
        try {
            const link = 'Bairro';
            const { cidade, ...filteredData } = formData;

            filteredData.id = +filteredData.id || 0;
            filteredData.valorFrete = +filteredData.valorFrete;

            const data = JSON.stringify(filteredData);

            if (filteredData.id !== 0) {
                console.log('update', data);
                await updateItem({ link, id: filteredData.id, item: data });

                setMessageReturn('Editado com suceso!');

                setTimeout(() => {
                    redirectGrid();
                }, 3000);
            } else {
                console.log('inserir', data);
                await insertItem({ link, item: data });

                setMessageReturn('Inserido com suceso!');

                setTimeout(() => {
                    redirectGrid();
                }, 3000);
            }

            reset();
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    const redirectGrid = () => {
        navigate('/Bairro');
    };

    useEffect(() => {
        console.log(data);
        if (data !== null) {
            setValue('id', data.id);
            setValue('nome', data.nome);
            setValue('isentaFrete', data.isentaFrete);
            setValue('valorFrete', data.valorFrete.toFixed(2).toString());
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
        <TableContainer>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                {messageReturn && <ReturnMessage>
                    <SuccessIcon />
                    <h2>{messageReturn}</h2>
                </ReturnMessage>}
                <FormActionContainer>
                    <ButtonForm onClick={redirectGrid}>Voltar</ButtonForm>
                    <ButtonForm save={true}>Enviar</ButtonForm>
                </FormActionContainer>
                <InputContainer tamanho='100%' visible='none'>
                    <Label>Id</Label>
                    <Input
                        type="text" {...register('id')} />
                </InputContainer>
                <InputContainer tamanho='100%'>
                    <Label>Nome</Label>
                    <Input
                        type="text" {...register('nome')} maxLength='50' />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <label htmlFor="valorFrete">Valor do frete</label>
                    <Controller
                        name="valorFrete"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <ValorInput
                                value={field.value}
                                onValueChange={field.onChange} />
                        )}
                    />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <Label>Isenta frete?</Label>
                    <InputCheck
                        type="checkbox" {...register('isentaFrete')} />
                </InputContainer>
                <span {...register('cidadeId')}></span>
                <InputContainer tamanho='100%'>
                    <Label>Cidade</Label>
                    <Input
                        type="text"
                        id='cidade'
                        {...register('cidade')}
                        onChange={handleInputChange}
                    />
                </InputContainer>
                {filter && filteredCidades.length > 0 && (
                    <UnodernedList>
                        {filteredCidades.map((cidade, index) => (
                            <Li key={index} onClick={() => handleItemClick(cidade)}>
                                {cidade.id} - {cidade.nome}
                            </Li>
                        ))}
                    </UnodernedList>
                )}
            </FormContainer>
        </TableContainer>
    )
}

export default BairroForm