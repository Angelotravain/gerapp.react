import React, { useState, useEffect } from 'react';
import FormStyled from '../FormStyled'
import { getItens } from '../../data/cadastros/CrudGeneric';
import { useForm, Controller } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import MaskedInput from '../../genericos/utils/MaskedInput';
import InputStyled from '../../genericos/utils/InputStyled';
import {
    TabsContainer,
    TabList,
    Tab,
    TabPanel,
    ImgAvatar,
    DivButtonStyled,
    Button,
    DivList
} from '../FormStyled.module'
import Image from '../../genericos/Image';
import InputCheckbox from '../../genericos/utils/InputCheckbox'

const ClienteForm = () => {
    const [filteredBairros, setFilteredBairros] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;
    const [activeTab, setActiveTab] = useState(0);
    const [imageSrc, setImageSrc] = useState('https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png');
    const fileInputRef = React.createRef();
    const {
        register,
        watch,
        setValue,
        control,
        formState: { errors },
    } = useForm()

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
            setValue('logradouro', data.enderecoCliente[0].logradouro);
            setValue('numero', data.enderecoCliente[0].numero);
            setValue('complemento', data.enderecoCliente[0].complemento);
            setValue('cep', data.enderecoCliente[0].cep);
            setValue('bairro', data.enderecoCliente[0].bairro.nome);
            setValue('bairroId', data.enderecoCliente[0].bairro.id);
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

    const setarEnderecos = (value) => {
        setValue('logradouro', value ? value.logradouro : '');
        setValue('numero', value ? value.numero : '');
        setValue('complemento', value ? value.complemento : '');
        setValue('cep', value ? value.cep : '');
        setValue('bairro', value ? value.bairro.nome : '');
        setValue('bairroId', value ? value.bairroId : '');
        console.log(value);

        const updatedEnderecos = enderecos.filter(endereco => endereco !== value);
        setEnderecos(updatedEnderecos);
    };

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


    const handleSubmit = () => {

    }

    return (
        <FormStyled linkReturn={'/Cliente'} nameLinkReturn={'Cliente'} data={[]} linkSaveOrEdit={'Cliente'} model={returnValues()}>
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
                            <InputStyled type="text" label='Código' id='id' {...register('id')} display='none' />
                            <InputStyled type="text" label='Nome' id='nome' {...register('nome')} tamanho='80vw' />
                            <InputStyled type="email" label='E-mail' id='email' {...register('email')} tamanho='80vw' />
                            <Controller
                                name="cpf"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <MaskedInput
                                        maskEdit="999.999.999-99"
                                        value={field.value}
                                        onChange={field.onChange}
                                        nameInput='CPF'
                                        tamanho='100%'
                                        label='CPF'
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
                                        tamanho='100%'
                                        label='Telefone'
                                    />
                                )}
                            />
                            <InputCheckbox type="checkbox" label='Ativo?' id='statusCliente' {...register('statusCliente')} tamanho='40px' />
                            <InputStyled id='nomeMae' label='Nome da mãe' type='text' {...register('nomeMae')} tamanho='80vw' />
                            <InputStyled type="text" id='nomePai' label='Nome do Pai' {...register('nomePai')} tamanho='80vw' />
                            <InputStyled type="text" id='nomeConjugue' label='Nome Conjuguê' {...register('nomeConjugue')} tamanho='80vw' />
                            <InputStyled id='dataNascimento' label='data de nascimento' type='date' {...register('dataNascimento')} />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel active={activeTab === 1}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
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
                                        tamanho='50vw'
                                    />
                                )}
                            />
                            <Button>buscar CEP</Button>
                        </div>
                        <div>
                            <InputStyled id='logradouro' label='Logradouro' type='text' {...register('logradouro')} required:true tamanho='80vw' />
                            <InputStyled id='numero' label='Número' type='text' {...register('numero')} tamanho='15vw' />
                            <InputStyled id='complemento' label='Complemento' type='text' {...register('complemento')} tamanho='65vw' />
                            <label htmlFor="bairro"></label>
                            <span {...register('bairroId')}></span>
                            <DivList>
                                <InputStyled id='bairro' label='Bairro' type='text' {...register('bairro')} onChange={handleInputChange} tamanho='60vw' />
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
                        </div>
                    </div>
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
                    <div >
                        <div>
                            <InputStyled id='login' label='Login' type='text' {...register('login')} />
                        </div>
                        <div>
                            <InputStyled id='senha' label='Senha' type='password' {...register('senha')} />
                        </div>
                    </div>
                </TabPanel>
            </TabsContainer>
        </FormStyled>
    )
}

export default ClienteForm