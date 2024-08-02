import React, { useState, useEffect, useRef } from 'react'
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
import Image from '../../../components/Genericos/Image';

const EquipamentoForm = () => {
    const [filteredCidades, setFilteredTipoEquipamento] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState('');
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;
    const [messageReturn, setMessageReturn] = useState('');
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lRbS7eKYzDq-Ftxc1p8G_TTw2unWBMEYUw&s');
    const fileInputRef = useRef(null);

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
            const link = 'Equipamento';
            const { cidade, ...filteredData } = formData;

            filteredData.id = +filteredData.id || 0;
            filteredData.imagem = imageSrc;
            filteredData.tipoEquipamento = null;

            const data = JSON.stringify(filteredData);

            if (filteredData.id !== 0) {

                await updateItem({ link, id: filteredData.id, item: data });

                setMessageReturn('Editado com suceso!');

                setTimeout(() => {
                    redirectGrid();
                }, 3000);
            } else {
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
        navigate('/Equipamentos');
    };

    useEffect(() => {
        console.log(data);

        if (data !== null) {
            console.log('retorno dados', data);
            setValue('id', data.id);
            setValue('descricao', data.descricao);
            setValue('valorUnitario', data.valorUnitario.toFixed(2));
            setValue('tipoEquipamento', data.tipoEquipamento.descricao);
            setValue('tipoEquipamentoId', data.tipoEquipamento.id);
            setValue('quantidade', data.quantidade);
            setValue('estaDisponivel', data.estaDisponivel);
            setImageSrc(data.imagem);
        }
    }, []);

    useEffect(() => {
        if (filter === '') {
            setFilteredTipoEquipamento([]);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getItens('TipoEquipamento');
                const filtered = data.filter(tipoEquipamento =>
                    tipoEquipamento.descricao.toLowerCase().includes(filter.toLowerCase()) ||
                    tipoEquipamento.id.toString().includes(filter)
                );
                setFilteredTipoEquipamento(filtered);
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

    const handleItemClick = (tipoEquipamento) => {
        setValue('tipoEquipamentoId', tipoEquipamento.id);
        setValue('tipoEquipamento', tipoEquipamento.descricao);
        setFilteredTipoEquipamento([]);
        setFilter('');
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

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
                <InputContainer tamanho='100%'>
                    <Image imageSrc={imageSrc} alt='Foto do veiculo' onClick={handleImageClick} />
                    <input type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }} />
                </InputContainer>
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
                <InputContainer tamanho='50%'>
                    <Label>Quantidade</Label>
                    <Input
                        type="number" {...register('quantidade')} />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <label htmlFor="valorUnitario">Valor do frete</label>
                    <Controller
                        name="valorUnitario"
                        control={control}
                        defaultValue=''
                        render={({ field }) => (
                            <ValorInput
                                value={field.value}
                                onValueChange={field.onChange}
                            />
                        )}
                    />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <Label>Está disponível?</Label>
                    <InputCheck
                        type="checkbox" {...register('estaDisponivel')} />
                </InputContainer>
                <span {...register('tipoEquipamentoId')}></span>
                <InputContainer tamanho='100%'>
                    <Label>Tipo de equipamento</Label>
                    <Input
                        type="text"
                        id='tipoEquipamento'
                        {...register('tipoEquipamento')}
                        onChange={handleInputChange}
                    />
                </InputContainer>
                {filter && filteredCidades.length > 0 && (
                    <UnodernedList>
                        {filteredCidades.map((tipoEquipamento, index) => (
                            <Li key={index} onClick={() => handleItemClick(tipoEquipamento)}>
                                {tipoEquipamento.id} - {tipoEquipamento.descricao}
                            </Li>
                        ))}
                    </UnodernedList>
                )}
            </FormContainer>
        </TableContainer>
    )
}

export default EquipamentoForm