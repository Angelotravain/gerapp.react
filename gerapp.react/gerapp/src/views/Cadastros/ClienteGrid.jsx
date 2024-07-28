import React, { useState, useEffect, useMemo } from 'react';
import {
    TableStyledWraper,
    IconEditButtonsStyled,
    IconExcudeButtonStyled,
    InputCheckboxStyled,
    DivWarpper,
    DivWarpperTextAlign,
    DivWarpperTextFixed,
    IconAddItemStyled,
    WarningSpanStyled,
    TableDataItenStyled,
    TableHeaderItenStyled,
    DivGlobal,
    TrStyled,
    TrBodyStyled,
    DivPagnation
} from './Global/GridGeneric.module.js';
import Loading from '../../loading/Loading.jsx';
import ImagemErro from '../../loading/ImagemErro.jsx';
import Refresh from '../../genericos/utils/Refresh.jsx';
import {
    getItens,
    deleteItem,
    getItensById
} from '../../data/cadastros/CrudGeneric.jsx';
import TBody from '../../genericos/TBody.jsx'
import {
    IconsCheckStyled,
    IconNoCheckedStyled
} from '../../genericos/utils/IconsStyled.module.js'
import { ButtonStyled } from '../../genericos/Button.module.js';
import {
    IconSavedStyled,
    IconCancelStyled
} from '../../genericos/utils/IconsStyled.module.js'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

const ClienteGrid = () => {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('');
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const link = 'Cliente';
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

    const debouncedFilter = useMemo(() => debounce((value) => setFilter(value), 300), []);

    const itemDelete = async (id) => {
        try {
            let response = await deleteItem({ link, id });
            Refresh();
            console.log(response);
            setOpen();
        } catch (error) {
            console.error(`Error deleting item with id ${id}:`, error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItens(link);
                setClientes(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const bairrosFiltrados = useMemo(() => {
        if (!filter) return clientes;
        return clientes.filter((a) => a['nome'].toUpperCase().includes(filter.toUpperCase()));
    }, [clientes, filter]);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) * itemsPerPage < bairrosFiltrados.length ? prev + 1 : prev);
    };

    const paginatedBairros = useMemo(() => bairrosFiltrados.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage), [bairrosFiltrados, currentPage]);

    if (loading) return <Loading />;
    if (error) return <ImagemErro />;

    return (
        <div>
            <WarningSpanStyled style={{ display: open ? 'flex' : 'none' }}>
                <p>Deseja realmente excluir o item?</p>
                <div>
                    <ButtonStyled onClick={() => itemDelete(id)}><IconSavedStyled /></ButtonStyled>
                    <ButtonStyled onClick={() => setOpen(false)} corFundo='#FA170F'><IconCancelStyled /></ButtonStyled>
                </div>
            </WarningSpanStyled>
            <DivWarpperTextAlign>
                <DivWarpperTextFixed>
                    <input
                        type="text"
                        placeholder='Buscar cliente...'
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <IconAddItemStyled onClick={() => navigate('/Cliente_form')} />
                </DivWarpperTextFixed>
            </DivWarpperTextAlign>
            <DivGlobal>
                <TableStyledWraper>
                    <thead>
                        <TrStyled>
                            <th style={{ display: 'none' }}>
                                <DivWarpper>
                                    <InputCheckboxStyled type='checkbox' />
                                </DivWarpper>
                            </th>
                            <th style={{ display: 'none' }}>Id</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <TableHeaderItenStyled>Telefone</TableHeaderItenStyled>
                            <TableHeaderItenStyled>Status cliente</TableHeaderItenStyled>
                            <th>Opções</th>
                        </TrStyled>
                    </thead>
                    <TBody>
                        {paginatedBairros.map((cliente) => (
                            <TrBodyStyled key={cliente.id}>
                                <td style={{ display: 'none' }}>
                                    <DivWarpper>
                                        <InputCheckboxStyled type='checkbox' />
                                    </DivWarpper>
                                </td>
                                <th style={{ display: 'none' }}>{cliente.id}</th>
                                <th>{cliente.nome}</th>
                                <th>{cliente.email}</th>
                                <TableDataItenStyled>{cliente.telefone}</TableDataItenStyled>
                                <TableDataItenStyled>{cliente.statusCliente ? <IconsCheckStyled /> : <IconNoCheckedStyled />}</TableDataItenStyled>
                                <th>
                                    <IconEditButtonsStyled onClick={() => navigate('/Cliente_form', { state: cliente })} />
                                    <IconExcudeButtonStyled onClick={() => { setId(bairro.id); setOpen(true); }} />
                                </th>
                            </TrBodyStyled>
                        ))}
                    </TBody>
                </TableStyledWraper>
                <DivPagnation>
                    <button onClick={handlePrevious} disabled={currentPage === 0}><GrPrevious /></button>
                    <button onClick={handleNext} disabled={(currentPage + 1) * itemsPerPage >= bairrosFiltrados.length}><GrNext /></button>
                </DivPagnation>
            </DivGlobal>
        </div>
    )
}

export default ClienteGrid