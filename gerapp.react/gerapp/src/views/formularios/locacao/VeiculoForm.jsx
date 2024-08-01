import React, { useState, useEffect, useRef } from 'react'
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
    Label,
    Select
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
import Image from '../../../components/Genericos/Image';

const VeiculoForm = () => {
    const [cidades, setCidades] = useState([]);
    const [filteredCidades, setFilteredCidades] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;
    const [messageReturn, setMessageReturn] = useState('');
    const [imageSrc, setImageSrc] = useState('https://e7.pngegg.com/pngimages/417/664/png-clipart-car-wash-van-sports-car-car-profile-van-truck.png');
    const navigate = useNavigate();
    const link = 'Veiculo';
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
            formData.imagem = imageSrc;
            console.log(formData);
            const data = JSON.stringify(formData);
            const { cidade, ...filteredData } = formData;

            filteredData.id = +filteredData.id || 0;

            if (filteredData.id !== 0) {
                console.log('update', data);
                await updateItem({ link, id: filteredData.id, item: filteredData });

                setMessageReturn('Editado com suceso!');

                setTimeout(() => {
                    redirectGrid();
                }, 3000);
            } else {
                console.log('inserir', data);
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
        navigate('/Veiculo');
    };

    useEffect(() => {
        if (data !== null) {
            setValue('id', data.id);
            setValue('marca', data.marca);
            setValue('modelo', data.modelo);
            setValue('ano', data.ano);
            setValue('cor', data.cor);
            setValue('placa', data.placa);
            setValue('kmPorLitro', data.kmPorLitro);
            setValue('tipoCombustivel', data.tipoCombustivel);
            setValue('manutencaoEmDia', data.manutencaoEmDia);
            setImageSrc(data.imagem);
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
                <InputContainer tamanho='50%'>
                    <Label>Marca</Label>
                    <Input
                        type="text" {...register('marca')} />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <Label>Modelo</Label>
                    <Input
                        type="text" {...register('modelo')} />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <Label>Ano</Label>
                    <Input
                        type="number" {...register('ano')} />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <Label>Cor</Label>
                    <Input
                        type="color" {...register('cor')} />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <Label>Placa</Label>
                    <Input
                        type="text" {...register('placa')} />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <Label>Km por litro</Label>
                    <Input
                        type="number" {...register('kmPorLitro')} />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <Label>Manutenção em dia?</Label>
                    <InputCheck
                        type="checkbox" {...register('manutencaoEmDia')} />
                </InputContainer>
                <InputContainer tamanho='50%'>
                    <Label>Tipo de combustível</Label>
                    <Select {...register("tipoCombustivel")}>
                        <option value="gasolina">Gasolina</option>
                        <option value="alcool">Álcool</option>
                        <option value="gas">Gás</option>
                        <option value="diesel">Diesel</option>
                        <option value="flex">Flex</option>
                    </Select>
                </InputContainer>
            </FormContainer>
        </TableContainer>
    )
}

export default VeiculoForm