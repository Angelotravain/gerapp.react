import React, { useState, useEffect, useMemo } from 'react';
import {
    TableContainer,
    Td,
    Tr,
    TableFilter,
    TableGear,
    ButtonGearMenu,
    DivTableContent
} from '../../../components/Tabela/Tabela.module'
import TableOrigin from '../../../components/Tabela/TableOrigin'
import {
    InputContainer,
    Input,
    Label
} from '../../../components/Input/Input.module'
import { FaFilePdf } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import ExportExcel from '../../../services/ExportExcel'
import {
    ButtonDelete
} from '../../../components/button/Button.module'
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { getItens } from '../../../services/httpRequest';
import DeleteItens from '../../../components/Delete/DeleteItens';
import Loading from '../../../components/Genericos/Loading/Loading.jsx';
import ImagemErro from '../../../components/Genericos/Loading/ImagemErro.jsx';

const EmpresaGrid = () => {
    const [isGear, setGear] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const [filter, setFilter] = useState('');
    const [empresas, setEmpresas] = useState([]);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;
    const link = 'Empresa';
    const [showDelete, setShowDelete] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;
        console.log(value.toString());
        setInputValue(value);
        debouncedFilter(value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value;
            setInputValue(value);
            debouncedFilter(value);
        }
    };

    const handleDeleteClick = () => {
        setShowDelete(true);
    };

    const redirectForm = (item) => {
        navigate('/Empresa_form', { state: item });
    };

    const debouncedFilter = useMemo(() => debounce((value) => setFilter(value), 300), []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItens(link);
                setEmpresas(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const empresasFiltrados = useMemo(() => {
        if (!filter) return empresas;
        return empresas.filter((a) => a['nome'].toUpperCase().includes(filter.toUpperCase()));
    }, [empresas, filter]);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) * itemsPerPage < empresasFiltrados.length ? prev + 1 : prev);
    };

    const paginatedEmpresas = useMemo(() => empresasFiltrados.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage), [empresasFiltrados, currentPage]);

    const handleExportExcel = () => {
        const jsonData = empresasFiltrados;
        ExportExcel(jsonData);
        setGear(!isGear);
    };


    if (loading) return <Loading />;
    if (error) return <ImagemErro />;

    return (
        <TableContainer>
            <TableFilter isFilter={isFilter}>
                <InputContainer tamanho='100%'>
                    <Label>Filtrar</Label>
                    <Input
                        type="text"
                        placeholder='Buscar empresa...'
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress} />
                </InputContainer>
            </TableFilter>
            <TableGear isGear={isGear}>
                <ButtonGearMenu >Gerar PDF <FaFilePdf /></ButtonGearMenu>
                <ButtonGearMenu onClick={handleExportExcel}>Gerar Planilha <SiMicrosoftexcel /></ButtonGearMenu>
            </TableGear>
            {showDelete && <DeleteItens link={link} id={id} setShowDelete={setShowDelete} />}
            <DivTableContent>
                <TableOrigin isGear={isGear}
                    isFilter={isFilter}
                    setFilter={setIsFilter}
                    navigate={() => redirectForm()}
                    setGear={setGear}
                    listName={['Nome', 'CNPJ', 'Telefone', 'E-mail', 'Site', 'Filial ?']}
                    next={handleNext}
                    previous={handlePrevious}>
                    {paginatedEmpresas.map((empresa) => (
                        <Tr key={empresa.id}>
                            <Td onClick={() => redirectForm(empresa)}>{empresa.nome}</Td>
                            <Td onClick={() => redirectForm(empresa)}>{empresa.cnpj}</Td>
                            <Td onClick={() => redirectForm(empresa)}>{empresa.telefone}</Td>
                            <Td onClick={() => redirectForm(empresa)}>{empresa.email}</Td>
                            <Td onClick={() => redirectForm(empresa)}>{empresa.website}</Td>
                            <Td onClick={() => redirectForm(empresa)}>{empresa.ehFilial ? 'Sim' : 'Não'}</Td>
                            <Td>
                                <ButtonDelete onClick={() => { setId(empresa.id); handleDeleteClick(); setGear(false); setIsFilter(false) }} />
                            </Td>
                        </Tr>
                    ))}
                </TableOrigin>
            </DivTableContent>
        </TableContainer>
    )
}

export default EmpresaGrid