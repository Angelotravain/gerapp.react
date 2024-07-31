import React, { useState, useEffect, useRef } from 'react'
import {
    TableContainer
} from '../../../components/Tabela/Tabela.module'
import {
    FormContainer,
    FormActionContainer,
} from '../../../components/form/Form.module';
import { ButtonForm } from '../../../components/button/Button.module'
import {
    InputCheck,
    InputContainer,
    Input,
    Label,
    ButtonInterForm
} from '../../../components/Input/Input.module'
import { useForm, Controller } from "react-hook-form";
import {
    useLocation,
    useNavigate
} from 'react-router-dom';
import {
    getItens,
    updateItem,
    insertItem,
    getItensById
} from '../../../services/httpRequest';
import {
    TabsContainer,
    TabList,
    Tab,
    TabPanel,
    DivList
} from '../FormStyled.module';
import MaskedInput from '../../../components/Genericos/utils/MaskedInput';
import Image from '../../../components/Genericos/Image';
import {
    SuccessIcon,
    ReturnMessage
} from '../FormStyled.module'

const EmpresaForm = () => {
    const [filteredBairros, setFilteredBairros] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const link = 'Empresa';
    const [imageSrc, setImageSrc] = useState('https://png.pngtree.com/png-vector/20190930/ourmid/pngtree-building-icon-isolated-on-abstract-background-png-image_1763153.jpg');
    const fileInputRef = useRef(null);
    const [messageReturn, setMessageReturn] = useState('');

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

            console.log(FormaterClient(formData));
            const data = JSON.stringify(FormaterClient(formData));

            console.log(formData.id);
            if (formData.id === undefined)
                formData.id = 0;
            if (formData.id !== 0) {
                await updateItem({ link, id: formData.id, item: data });

                setMessageReturn('Editado com suceso!');

                setTimeout(() => {
                    redirectGrid();
                }, 3000);
            } else {
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

    const redirectGrid = () => {
        navigate('/Empresa');
    };

    useEffect(() => {

        if (data !== null) {
            console.log(data);
            setValue('id', data.id);
            setValue('nome', data.nome);
            setValue('email', data.email);
            setValue('cnpj', data.cnpj);
            setValue('telefone', data.telefone);
            setValue('ehFilial', data.ehFilial);
            setValue('website', data.website);
            setImageSrc(data.logoEmpresa || imageSrc);
            // if()
            // setValue('logradouro', data.enderecoEmpresa.logradouro || '');
            // setValue('numero', data.enderecoEmpresa.numero || '');
            // setValue('complemento', data.enderecoEmpresa.complemento || '');
            // setValue('cep', data.enderecoEmpresa.cep || '');
            // setValue('bairro', data.enderecoEmpresa.bairro.nome || '');
            // setValue('bairroId', data.enderecoEmpresa.bairro.id || '');
        }
    }, []);

    const FormaterClient = (data) => {
        const empresa = {
            id: data.id || 0,
            nome: data.nome,
            cnpj: data.cnpj,
            telefone: data.telefone,
            email: data.email,
            website: data.website,
            logoEmpresa: imageSrc,
            ehFilial: data.ehFilial,
            enderecoEmpresa: {
                logradouro: data.logradouro,
                numero: data.numero,
                complemento: data.complemento,
                id: data.enderecoId,
                cep: data.cep,
                bairro: null,
                bairroId: data.bairroId
            }
        };

        return empresa;
    };
    useEffect(() => {
        if (filter === '') {
            setFilteredBairros([]);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getItens('Bairro');
                const filtered = data.filter(cidade =>
                    cidade.nome.toLowerCase().includes(filter.toLowerCase()) ||
                    cidade.id.toString().includes(filter)
                );
                setFilteredBairros(filtered);
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

    const handleItemClick = (bairro) => {
        setValue('bairroId', bairro.id);
        setValue('bairro', bairro.nome);
        setFilteredBairros([]);
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

    const buscarCep = async () => {
        try {
            const data = await getItensById('UtilitarioCep', watch('cep'));
            if (data) {
                setValue('logradouro', data.logradouro);
                setValue('complemento', data.complemento);
                setValue('cep', data.cep);
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
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
                <TabsContainer>
                    <TabList>
                        <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>Empresa</Tab>
                        <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>Endereço</Tab>
                    </TabList>

                    <TabPanel active={activeTab === 0}>
                        <div>
                            <div>
                                <Image imageSrc={imageSrc} alt='' onClick={handleImageClick} />
                                <input type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} />
                                <span {...register('id')}></span>
                                <InputContainer tamanho='50%'>
                                    <Label>Nome</Label>
                                    <Input
                                        type="text" {...register('nome')} />
                                </InputContainer>
                                <Controller
                                    name="cnpj"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <MaskedInput
                                            maskEdit="99.999.999/9999-99"
                                            value={field.value}
                                            onChange={field.onChange}
                                            nameInput='cnpj'
                                            label='CNPJ'
                                            tamanho='50%'
                                        />
                                    )}
                                />
                                <Controller
                                    name="telefone"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <MaskedInput
                                            maskEdit="(99) 99999-9999"
                                            value={field.value}
                                            onChange={field.onChange}
                                            nameInput='Telefone'
                                            tamanho='50%'
                                            label='Telefone'
                                        />
                                    )}
                                />
                                <InputContainer tamanho='50%'>
                                    <Label>E-mail</Label>
                                    <Input
                                        type="text" {...register('email')} />
                                </InputContainer>
                                <InputContainer tamanho='50%'>
                                    <Label>Web site</Label>
                                    <Input
                                        type="text" {...register('website')} />
                                </InputContainer>
                                <InputContainer tamanho='10%'>
                                    <Label>é filial?</Label>
                                    <InputCheck
                                        type="checkbox" {...register('ehFilial')} />
                                </InputContainer>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel active={activeTab === 1}>
                        <span {...register('enderecoId')}></span>
                        <Controller
                            name="cep"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <MaskedInput
                                    maskEdit="99999-999"
                                    value={field.value}
                                    onChange={field.onChange}
                                    nameInput='CEP'
                                    label='CEP'
                                    tamanho='30%'
                                />
                            )}
                        />
                        <ButtonInterForm onClick={(e) => { e.preventDefault(); buscarCep(); }}>Buscar CEP</ButtonInterForm>
                        <InputContainer tamanho='100%'>
                            <Label>Logradouro</Label>
                            <Input
                                type="text" {...register('logradouro')} />
                        </InputContainer>
                        <InputContainer tamanho='20%'>
                            <Label>Número</Label>
                            <Input
                                type="text" {...register('numero')} />
                        </InputContainer>
                        <InputContainer tamanho='80%'>
                            <Label>Complemento</Label>
                            <Input
                                type="text" {...register('complemento')} />
                        </InputContainer>
                        <span {...register('bairroId')}></span>
                        <DivList tamanho='100%'>
                            <InputContainer tamanho='100%'>
                                <Label>Bairro</Label>
                                <Input
                                    type="text" {...register('bairro')} onChange={handleInputChange} />
                            </InputContainer>
                            {filter && filteredBairros.length > 0 && (
                                <ul>
                                    {filteredBairros.map((cidade, index) => (
                                        <li key={index} onClick={() => handleItemClick(cidade)}>
                                            {cidade.id} - {cidade.nome}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </DivList>
                    </TabPanel>
                </TabsContainer>
            </FormContainer>
        </TableContainer>
    )
}

export default EmpresaForm