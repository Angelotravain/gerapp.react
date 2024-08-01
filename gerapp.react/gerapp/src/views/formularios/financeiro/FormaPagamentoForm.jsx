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

const FormaPagamentoForm = () => {
    const location = useLocation();
    const data = location.state;
    const [messageReturn, setMessageReturn] = useState('');
    const navigate = useNavigate();
    const link = 'FormaPagamento';

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

            console.log(handleSubmit);
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
                console.log('inserir', filteredData);
                await insertItem({ link, item: filteredData });

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
        navigate('/FormaPagamento');
    };

    useEffect(() => {
        if (data !== null) {
            setValue('id', data.id);
            setValue('descricao', data.descricao);
            setValue('ehCredito', data.ehCredito);
            setValue('ehDebito', data.ehDebito);
            setValue('ehAvista', data.ehAvista);
        }
    }, []);

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
                    <Label>Crédito?</Label>
                    <InputCheck
                        type="checkbox" {...register('ehCredito')} />
                </InputContainer>
                <InputContainer tamanho='30%'>
                    <Label>Débito?</Label>
                    <InputCheck
                        type="checkbox" {...register('ehDebito')} />
                </InputContainer>
                <InputContainer tamanho='30%'>
                    <Label>A vista?</Label>
                    <InputCheck
                        type="checkbox" {...register('ehAvista')} />
                </InputContainer>
            </FormContainer>
        </TableContainer>
    )
}

export default FormaPagamentoForm