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
    TabsContainer,
    TabList,
    Tab,
    TabPanel,
    Button,
    DivList
} from '../FormStyled.module';
import MaskedInput from '../../../components/Genericos/utils/MaskedInput';
import InputStyled from '../../../components/Genericos/utils/InputStyled';
import Image from '../../../components/Genericos/Image';
import InputCheckbox from '../../../components/Genericos/utils/InputCheckbox'

const ClienteForm = () => {
    const [bairros, setBairros] = useState([]);
    const [filteredBairros, setFilteredBairros] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [imageSrc, setImageSrc] = useState('https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png');
    const fileInputRef = React.createRef();
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
            const link = 'Cliente';
            const { cidade, ...filteredData } = formData;

            filteredData.id = +filteredData.id || 0;
            filteredData.valorFrete = +filteredData.valorFrete;

            const data = JSON.stringify(filteredData);

            if (filteredData.id !== 0) {
                console.log('update', data);
                await updateItem({ link, id: filteredData.id, item: data });
            } else {
                console.log('inserir', data);
                await insertItem({ link, item: data });
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

    const addEndereco = () => {
        const enderecoNovo = {
            logradouro: watch('logradouro'),
            numero: watch('numero'),
            complemento: watch('complemento'),
            cep: watch('cep'),
            bairroId: watch('bairroId'),
        }
        setEnderecos(prevEnderecos => [...prevEnderecos, enderecoNovo]);
        setarEnderecos(null);
    };

    useEffect(() => {

        if (data !== null) {
            setValue('id', data.id);
            setValue('nome', data.nome);
            setValue('email', data.email);
            setValue('cpf', data.cpf);
            setValue('telefone', data.telefone);
            setValue('statusCliente', data.statusCliente);
            setValue('nomeMae', data.nomeMae);
            setValue('nomePai', data.nomePai);
            setValue('nomeConjugue', data.nomeConjugue);
            setValue('dataNascimento', data.dataNascimento);
            setValue('login', data.usuarioCliente.login);
            setValue('senha', data.usuarioCliente.senha);
            setEnderecos(data.enderecoCliente);
        }
    }, []);

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

    const handleItemClick = (cidade) => {
        setValue('cidadeId', cidade.id);
        setValue('cidade', cidade.nome);
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

    return (
        <TableContainer>
            <FormContainer>
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
                                        type="text" {...register('nome')} />
                                </InputContainer>
                                <InputContainer tamanho='50%'>
                                    <Label>E-mail</Label>
                                    <Input
                                        type="text" {...register('email')} />
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
                                <InputContainer tamanho='10%'>
                                    <Label>Ativo?</Label>
                                    <InputCheck
                                        type="checkbox" {...register('statusCliente')} />
                                </InputContainer>
                                <InputContainer tamanho='40%'>
                                    <Label>Data de nascimento</Label>
                                    <Input
                                        type="date" {...register('dataNascimento')} />
                                </InputContainer>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel active={activeTab === 1}>
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
                                    tamanho='50%'
                                />
                            )}
                        />
                        <InputContainer tamanho='50%'>
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
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Logradouro</th>
                                        <th>Número</th>
                                        <th>Complemento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {enderecos.map((endereco) => (
                                        <tr onClick={() => setarEnderecos(endereco)}>
                                            <td>{endereco.logradouro}</td>
                                            <td>{endereco.numero}</td>
                                            <td>{endereco.complemento}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Button onClick={addEndereco}>Adicionar endereço</Button>
                        </div>
                    </TabPanel>
                    <TabPanel active={activeTab === 2}>
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