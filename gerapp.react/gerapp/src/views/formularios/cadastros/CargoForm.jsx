import React, { useState, useEffect } from 'react'
import { TableContainer } from '../../../components/Tabela/Tabela.module'
import {
    FormContainer,
    FormActionContainer
} from '../../../components/form/Form.module';
import { ButtonForm } from '../../../components/button/Button.module'
import {
    InputCheck,
    InputContainer,
    Input,
    Label
} from '../../../components/Input/Input.module'
import { useForm } from "react-hook-form";
import {
    useLocation,
    useNavigate
} from 'react-router-dom';
import {
    getItens,
    updateItem,
    insertItem
} from '../../../services/httpRequest';
import {
    SuccessIcon,
    ReturnMessage
} from '../FormStyled.module'

const CargoForm = () => {
    const [cidades, setCidades] = useState([]);
    const [filteredCidades, setFilteredCidades] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;
    const [messageReturn, setMessageReturn] = useState('');
    const navigate = useNavigate();
    const link = 'Cargo';

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
            const data = JSON.stringify(formData);
            const { cidade, ...filteredData } = formData;

            filteredData.id = +filteredData.id || 0;

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
        navigate('/Cargo');
    };

    useEffect(() => {
        if (data !== null) {
            setValue('id', data.id);
            setValue('descricao', data.descricao);
            setValue('acessaCadastro', data.acessaCadastro);
            setValue('acessaFinanceiro', data.acessaFinanceiro);
            setValue('acessaLocacao', data.acessaLocacao);
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
                    <Label>Descrição</Label>
                    <Input
                        type="text" {...register('descricao')} />
                </InputContainer>
                <InputContainer tamanho='30%'>
                    <Label>Acessa cadastros?</Label>
                    <InputCheck
                        type="checkbox" {...register('acessaCadastro')} />
                </InputContainer>
                <InputContainer tamanho='30%'>
                    <Label>Acessa financeiro?</Label>
                    <InputCheck
                        type="checkbox" {...register('acessaFinanceiro')} />
                </InputContainer>
                <InputContainer tamanho='30%'>
                    <Label>Acessa locação?</Label>
                    <InputCheck
                        type="checkbox" {...register('acessaLocacao')} />
                </InputContainer>
            </FormContainer>
        </TableContainer>
    )
}

export default CargoForm