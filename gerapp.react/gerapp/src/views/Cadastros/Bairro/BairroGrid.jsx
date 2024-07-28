import React, { useState, useEffect, useMemo } from 'react';
import {
    TableContainer,
    Td,
    Tr,
    TableFilter,
    TableGear,
    ButtonGearMenu,
    DivTableContent,
    DivListContent
} from '../../../components/Tabela/Tabela.module'
import TableList from '../../../components/Tabela/TableList'
import TableOrigin from '../../../components/Tabela/TableOrigin'
import {
    InputCheck,
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

const BairroGrid = () => {
    const [isGear, setGear] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const [filter, setFilter] = useState('');
    const [bairros, setBairros] = useState([]);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;
    const link = 'Bairro';
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
        navigate('/Bairro_form', { state: item });
    };

    const debouncedFilter = useMemo(() => debounce((value) => setFilter(value), 300), []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItens(link);
                setBairros(data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    const bairrosFiltrados = useMemo(() => {
        if (!filter) return bairros;
        return bairros.filter((a) => a['nome'].toUpperCase().includes(filter.toUpperCase()));
    }, [bairros, filter]);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) * itemsPerPage < bairrosFiltrados.length ? prev + 1 : prev);
    };

    const paginatedBairros = useMemo(() => bairrosFiltrados.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage), [bairrosFiltrados, currentPage]);

    const handleExportExcel = () => {
        const jsonData = bairrosFiltrados;
        ExportExcel(jsonData);
        setGear(!isGear);
    };

    return (
        <TableContainer>
            <TableFilter isFilter={isFilter}>
                <InputContainer tamanho='100%'>
                    <Label>Filtrar</Label>
                    <Input
                        type="text"
                        placeholder='Buscar bairro...'
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
                    listName={['Nome', 'Valor frete', 'Isenta frete?']}
                    next={handleNext}
                    previous={handlePrevious}>
                    {paginatedBairros.map((bairro) => (
                        <Tr key={bairro.id}>
                            <Td onClick={() => redirectForm(bairro)}>{bairro.nome}</Td>
                            <Td onClick={() => redirectForm(bairro)}>R$ {bairro.valorFrete.toFixed(2)}</Td>
                            <Td onClick={() => redirectForm(bairro)}>{bairro.isentaFrete ? 'Sim' : 'Não'}</Td>
                            <Td>
                                <ButtonDelete onClick={() => { setId(bairro.id); handleDeleteClick(); setGear(false); setIsFilter(false) }} />
                            </Td>
                        </Tr>
                    ))}
                </TableOrigin>
            </DivTableContent>
        </TableContainer>
    )
}

export default BairroGrid