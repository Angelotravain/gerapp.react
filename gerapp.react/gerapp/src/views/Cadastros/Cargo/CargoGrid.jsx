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

const CargoGrid = () => {
    const [isGear, setGear] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const [filter, setFilter] = useState('');
    const [cargos, setCargos] = useState([]);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;
    const link = 'Cargo';
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
        navigate('/Cargo_form', { state: item });
    };

    const debouncedFilter = useMemo(() => debounce((value) => setFilter(value), 300), []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItens(link);
                setCargos(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const cargosFiltrados = useMemo(() => {
        if (!filter) return cargos;
        return cargos.filter((a) => a['descricao'].toUpperCase().includes(filter.toUpperCase()));
    }, [cargos, filter]);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) * itemsPerPage < cargosFiltrados.length ? prev + 1 : prev);
    };

    const paginatedCargos = useMemo(() => cargosFiltrados.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage), [cargosFiltrados, currentPage]);

    const handleExportExcel = () => {
        const jsonData = cargosFiltrados;
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
                        placeholder='Buscar cargo...'
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
                    listName={['Descrição', 'Acessa cadastro?', 'Acessa financeiro?', 'Acessa locação?']}
                    next={handleNext}
                    previous={handlePrevious}>
                    {paginatedCargos.map((cargo) => (
                        <Tr key={cargo.id}>
                            <Td onClick={() => redirectForm(cargo)}>{cargo.descricao}</Td>
                            <Td onClick={() => redirectForm(cargo)}>{cargo.acessaCadastro ? 'Sim' : 'Não'}</Td>
                            <Td onClick={() => redirectForm(cargo)}>{cargo.acessaFinanceiro ? 'Sim' : 'Não'}</Td>
                            <Td onClick={() => redirectForm(cargo)}>{cargo.acessaLocacao ? 'Sim' : 'Não'}</Td>
                            <Td>
                                <ButtonDelete onClick={() => { setId(cargo.id); handleDeleteClick(); setGear(false); setIsFilter(false) }} />
                            </Td>
                        </Tr>
                    ))}
                </TableOrigin>
            </DivTableContent>
        </TableContainer>
    )
}

export default CargoGrid