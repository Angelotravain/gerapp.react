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
import ValorInput from '../../../components/Genericos/utils/ValorInput';

const FuncionarioForm = () => {
    const [filteredBairros, setFilteredBairros] = useState([]);
    const [filteredEmpresas, setFilteredEmpresas] = useState([]);
    const [filteredCargos, setFilteredCargos] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [filter, setFilter] = useState('');
    const [idEndereco, setIdEndereco] = useState(0);
    const [filterEmpresa, setFilterEmpresa] = useState('');
    const [filterCargo, setFilterCargo] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const link = 'Funcionario';
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
            const data = JSON.stringify(FormaterClient(formData));

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
        navigate('/Funcionario');
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
            setValue('salario', data.salario.toFixed(2).toString());
            setValue('empresaId', data.empresaId);
            setValue('empresa', data.empresa.nome);
            setValue('cargo', data.cargo.descricao);
            setValue('cargoId', data.cargoId);
            setImageSrc(data.imagem);
            setEnderecos(data.enderecoFuncionario);
            setValue('usuarioId', data.usuarioFuncionario.id || 0);
            setValue('login', data.usuarioFuncionario.login || '');
            setValue('senha', data.usuarioFuncionario.senha || '');
        }
    }, []);

    const FormaterClient = (data) => {
        const funcionario = {
            id: data.id || 0,
            nome: data.nome,
            salario: data.salario,
            empresa: null,
            cargo: null,
            empresaId: data.empresaId || 0,
            cargoId: data.cargoId || 0,
            imagem: imageSrc,
            usuarioFuncionario: {
                id: data.usuarioId || 0,
                login: data.login,
                senha: data.senha,
                usuarioClienteId: 0,
                usuarioFuncionarioId: data.id || 0,
            },
            enderecoFuncionario: enderecos
        };

        return funcionario;
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

    useEffect(() => {
        const fetchEmpresa = async () => {
            const dataEmpresa = await getItens('Empresa');
            const filteredEmpresa = dataEmpresa.filter(empresa =>
                empresa.nome.toLowerCase().includes(filterEmpresa.toLowerCase()) ||
                empresa.id.toString().includes(filterEmpresa)
            );
            console.log("Filtered Empresas:", filteredEmpresa)
            setFilteredEmpresas(filteredEmpresa);
        }

        fetchEmpresa();

    }, [filterEmpresa]);

    useEffect(() => {
        const fetchCargo = async () => {
            const dataCargo = await getItens('Cargo');
            const filteredCargo = dataCargo.filter(cargo =>
                cargo.descricao.toLowerCase().includes(filterCargo.toLowerCase()) ||
                cargo.id.toString().includes(filterCargo)
            );
            setFilteredCargos(filteredCargo);
        }

        fetchCargo();

    }, [filterCargo]);

    const handleInputChange = (e) => {
        setFilter(e.target.value);
    };

    const handleInputEmpresaChange = (e) => {
        setFilterEmpresa(e.target.value);
    };
    const handleInputCargoChange = (e) => {
        setFilterCargo(e.target.value);
    };
    const handleItemClick = (bairro) => {
        setValue('bairroId', bairro.id);
        setValue('bairro', bairro.nome);
        setFilteredBairros([]);
        setFilter('');
    };

    const handleItemcargoClick = (bairro) => {
        setValue('cargoId', bairro.id);
        setValue('cargo', bairro.descricao);
        setFilteredCargos([]);
        setFilterCargo('');
    };
    const handleItemEmpresaClick = (empresa) => {
        setValue('empresaId', empresa.id);
        setValue('empresa', empresa.nome);
        setFilteredEmpresas([]);
        setFilterEmpresa('');
    };

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
                        <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>Funcionário</Tab>
                        <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>Endereço</Tab>
                        <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>Usuário</Tab>
                    </TabList>

                    <TabPanel active={activeTab === 0}>
                        <div>
                            <div>
                                <Image imageSrc={imageSrc} alt='Foto do funcionario' onClick={handleImageClick} />
                                <input type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} />
                                <span {...register('id')}></span>
                                <InputContainer tamanho='50%'>
                                    <Label>Nome</Label>
                                    <Input
                                        type="text" {...register('nome', {
                                            required: 'Nome do funcionário é um campo obrigatório!',
                                            maxLength: { value: 200, message: 'Tamanho máximo é 200 caracteres' }
                                        })} />
                                    {errors.nome && <span style={{ color: 'red' }}>{errors.nome.message}</span>}
                                </InputContainer>
                                <InputContainer tamanho='50%'>
                                    <label htmlFor="salario">Salário</label>
                                    <Controller
                                        name="salario"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <ValorInput
                                                value={field.value}
                                                onValueChange={field.onChange} />
                                        )}
                                    />
                                </InputContainer>
                                <DivList tamanho='50%'>
                                    <span {...register('empresaId')}></span>
                                    <InputContainer tamanho='100%'>
                                        <Label>Empresa</Label>
                                        <Input
                                            type="text" {...register('empresa')} onChange={handleInputEmpresaChange} />
                                    </InputContainer>
                                    {filterEmpresa && filteredEmpresas.length > 0 && (
                                        <ul>
                                            {filteredEmpresas.map((empresa, index) => (
                                                <li key={index} onClick={() => handleItemEmpresaClick(empresa)}>
                                                    {empresa.id} - {empresa.nome}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </DivList>
                                <DivList tamanho='50%'>
                                    <span {...register('cargoId')}></span>
                                    <InputContainer tamanho='100%'>
                                        <Label>Cargo</Label>
                                        <Input
                                            type="text" {...register('cargo')} onChange={handleInputCargoChange} />
                                    </InputContainer>
                                    {filterCargo && filteredCargos.length > 0 && (
                                        <ul>
                                            {filteredCargos.map((cargo, index) => (
                                                <li key={index} onClick={() => handleItemcargoClick(cargo)}>
                                                    {cargo.id} - {cargo.descricao}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </DivList>
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
                                type="text" {...register('logradouro')} />
                        </InputContainer>
                        <InputContainer tamanho='20%'>
                            <Label>Número</Label>
                            <Input
                                type="text" {...register('numero')} />
                        </InputContainer>
                        <InputContainer tamanho='100%'>
                            <Label>Complemento</Label>
                            <Input
                                type="text" {...register('complemento')} />
                        </InputContainer>
                        <span {...register('bairroId')}></span>
                        <DivList tamanho='100%'>
                            <InputContainer tamanho='50%'>
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
                        <ButtonInterForm onClick={(e) => { e.preventDefault(); addEndereco(); }}>Adicionar endereço</ButtonInterForm>
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
                                        <tr key={endereco.id} onClick={() => setarEnderecos(endereco)}>
                                            <Td>{endereco.logradouro}</Td>
                                            <Td>{endereco.numero}</Td>
                                            <Td>{endereco.complemento}</Td>
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

export default FuncionarioForm