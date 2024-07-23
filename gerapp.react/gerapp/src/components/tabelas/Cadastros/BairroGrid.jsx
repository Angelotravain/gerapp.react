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
import { debounce } from 'lodash'; // Adicione esta linha

const BairroGrid = () => {
    const [bairros, setBairros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('');
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const link = 'Bairro';
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
                setBairros(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []); // Remova 'bairros' da lista de dependências

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
                        placeholder='Buscar bairro...'
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <IconAddItemStyled onClick={() => navigate('/Bairro_form')} />
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
                            <th>nome</th>
                            <th>valor frete</th>
                            <TableHeaderItenStyled>Isenta frete</TableHeaderItenStyled>
                            <TableHeaderItenStyled>Cidade</TableHeaderItenStyled>
                            <th>Opções</th>
                        </TrStyled>
                    </thead>
                    <TBody>
                        {paginatedBairros.map((bairro) => (
                            <TrBodyStyled key={bairro.id}>
                                <td style={{ display: 'none' }}>
                                    <DivWarpper>
                                        <InputCheckboxStyled type='checkbox' />
                                    </DivWarpper>
                                </td>
                                <th style={{ display: 'none' }}>{bairro.id}</th>
                                <th>{bairro.nome}</th>
                                <th>{bairro.valorFrete}</th>
                                <TableDataItenStyled>{bairro.isentaFrete ? <IconsCheckStyled /> : <IconNoCheckedStyled />}</TableDataItenStyled>
                                <TableDataItenStyled>{bairro.cidade.nome}</TableDataItenStyled>
                                <th>
                                    <IconEditButtonsStyled onClick={() => navigate('/Bairro_form', { state: bairro })} />
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
    );
}

export default BairroGrid;
