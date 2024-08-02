import React, { useState, useEffect, useRef } from 'react'
import {
    Table,
    TableContainer,
    Th,
    Td,
    TableFormContainer
} from '../../../components/Tabela/Tabela.module'
import {
    FormContainer,
    FormActionContainer,
} from '../../../components/form/Form.module';
import { ButtonDelete, ButtonForm } from '../../../components/button/Button.module'
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
    getItensById,
    deleteItem
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
import { formatDateCampo } from '../../../components/Genericos/utils/Formater'
import {
    SuccessIcon,
    ReturnMessage
} from '../FormStyled.module'

const ClienteForm = () => {
    const [bairros, setBairros] = useState([]);
    const [filteredBairros, setFilteredBairros] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [filter, setFilter] = useState('');
    const [idEndereco, setIdEndereco] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const link = 'Cliente';
    const [imageSrc, setImageSrc] = useState('https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png');
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
        navigate('/Cliente');
    };

    const removeEndereco = async () => {
        try {
            if (idEndereco === 0) {
                setEnderecos(prevEnderecos => prevEnderecos.filter(e => e.id !== idEndereco));
            } else {
                let response = await deleteItem({ link: 'Endereco', id: idEndereco });

                if (response === 'Endereço excluido com sucesso!') {
                    setEnderecos(prevEnderecos => prevEnderecos.filter(e => e.id !== idEndereco));
                } else {
                    console.log('Erro ao deletar o item:', response.statusText);
                }
            }
        } catch (error) {
            console.log('Erro ao deletar o item:', error);
        }
    };



    const addEndereco = () => {
        const enderecoNovo = {
            id: watch('enderecoId') || 0,
            logradouro: watch('logradouro'),
            numero: watch('numero'),
            complemento: watch('complemento'),
            cep: watch('cep'),
            bairroId: watch('bairroId'),
            bairro: null,
        }
        setEnderecos(prevEnderecos => [...prevEnderecos, enderecoNovo]);

        setValue('logradouro', '');
        setValue('numero', '');
        setValue('complemento', '');
        setValue('cep', '');
        setValue('bairro', '');
        setValue('bairroId', '');
    };

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

    useEffect(() => {

        if (data !== null) {
            setValue('id', data.id);
            setValue('nome', data.nome);
            setValue('email', data.email);
            setValue('telefone', data.telefone);
            setValue('statusCliente', data.statusCliente);
            setValue('dataNascimento', formatDateCampo(data.dataNascimento));
            setValue('usuarioId', data.usuarioCliente.id);
            setValue('login', data.usuarioCliente.login);
            setImageSrc(data.imagem);
            setValue('senha', data.usuarioCliente.senha);
            setEnderecos(data.enderecoCliente);
        }
    }, []);

    const FormaterClient = (data) => {
        const cliente = {
            id: data.id || 0,
            nome: data.nome,
            email: data.email,
            telefone: data.telefone,
            statusCliente: data.statusCliente,
            dataNascimento: data.dataNascimento,
            imagem: imageSrc,
            usuarioCliente: {
                id: data.usuarioId || 0,
                login: data.login,
                senha: data.senha,
                usuarioClienteId: data.id || 0,
                usuarioFuncionarioId: 0
            },
            enderecoCliente: enderecos
        };

        return cliente;
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

    const setarEnderecos = (value) => {
        setValue('logradouro', value ? value.logradouro : '');
        setValue('numero', value ? value.numero : '');
        setValue('complemento', value ? value.complemento : '');
        setValue('cep', value ? value.cep : '');
        setValue('bairro', value ? value.bairro.nome : '');
        setValue('bairroId', value ? value.bairroId : '');
        setValue('enderecoId', value ? value.id : '');

        const updatedEnderecos = enderecos.filter(endereco => endereco !== value);
        setEnderecos(updatedEnderecos);
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
                        <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>Cliente</Tab>
                        <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>Endereço</Tab>
                        <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>Usuário</Tab>
                    </TabList>

                    <TabPanel active={activeTab === 0}>
                        <div>
                            <div>
                                <Image imageSrc={imageSrc} alt='Foto do cliente' onClick={handleImageClick} />
                                <input type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} />
                                <span {...register('id')}></span>
                                <InputContainer tamanho='50%'>
                                    <Label>Nome</Label>
                                    <Input
                                        type="text" {...register('nome')} maxLength='80' />
                                </InputContainer>
                                <InputContainer tamanho='50%'>
                                    <Label>E-mail</Label>
                                    <Input
                                        type="text" {...register('email')} maxLength='80' />
                                </InputContainer>
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
                                <InputContainer tamanho='20%' display='flex'>
                                    <Label>Ativo?</Label>
                                    <InputCheck
                                        type="checkbox" {...register('statusCliente')} />
                                </InputContainer>
                                <InputContainer tamanho='30%'>
                                    <Label>Data de nascimento</Label>
                                    <Input
                                        type="date" {...register('dataNascimento')} />
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
                        <InputContainer tamanho='40%'>
                            <Label>Logradouro</Label>
                            <Input
                                type="text" {...register('logradouro')} maxLength='180' />
                        </InputContainer>
                        <InputContainer tamanho='20%'>
                            <Label>Número</Label>
                            <Input
                                type="text" {...register('numero')} maxLength='10' minLength='1' />
                        </InputContainer>
                        <InputContainer tamanho='100%'>
                            <Label>Complemento</Label>
                            <Input
                                type="text" {...register('complemento')} maxLength='100' />
                        </InputContainer>
                        <span {...register('bairroId')}></span>
                        <DivList tamanho='50%'>
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
                        <InputContainer tamanho='50%'>
                            <ButtonInterForm onClick={(e) => { e.preventDefault(); addEndereco(); }}>Adicionar endereço</ButtonInterForm>
                        </InputContainer>
                        <TableFormContainer>
                            <Table>
                                <thead>
                                    <tr>
                                        <Th>Logradouro</Th>
                                        <Th>Número</Th>
                                        <Th>Complemento</Th>
                                        <Th>Opções</Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {enderecos.map((endereco) => (
                                        <tr key={endereco.id}>
                                            <Td onClick={() => setarEnderecos(endereco)}>{endereco.logradouro}</Td>
                                            <Td onClick={() => setarEnderecos(endereco)}>{endereco.numero}</Td>
                                            <Td onClick={() => setarEnderecos(endereco)}>{endereco.complemento}</Td>
                                            <Td><ButtonDelete onClick={() => { setIdEndereco(endereco.id); removeEndereco(idEndereco); }} /></Td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </TableFormContainer>
                    </TabPanel>
                    <TabPanel active={activeTab === 2}>
                        <span {...register('usuarioId')}></span>
                        <InputContainer tamanho='100%'>
                            <Label>Login</Label>
                            <Input
                                type="text" {...register('login')} />
                        </InputContainer>
                        <InputContainer tamanho='100%'>
                            <Label>Senha</Label>
                            <Input
                                type="password" {...register('senha')} />
                        </InputContainer>
                    </TabPanel>
                </TabsContainer>
            </FormContainer>
        </TableContainer>
    )
}

export default ClienteForm