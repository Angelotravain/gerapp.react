import React, { useState, useEffect } from 'react';
import {
    TableStyledWraper,
    IconEditButtonsStyled,
    IconExcudeButtonStyled,
    InputCheckboxStyled,
    DivWarpper,
    DivWarpperTextAlign,
    DivWarpperTextFixed,
    IconSearchStyled,
    IconAddItemStyled,
    WarningSpanStyled,
    TableDataItenStyled,
    TableHeaderItenStyled
} from './Global/GridGeneric.module.js';
import Loading from '../../loading/Loading.jsx';
import ImagemErro from '../../loading/ImagemErro';
import Refresh from '../../utils/Refresh.jsx';
import {
    getItens,
    deleteItem
} from '../../../data/cadastros/CrudGeneric.jsx';



const BairroGrid = () => {
    const [bairros, setBairros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectPage, setSelectPage] = useState(20);
    const quantidadeItensPage = [5, 10, 15, 20, 50];
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('');
    const [open, setOpen] = useState(false);
    const [bairrosFiltrados, setBairrosFiltrados] = useState([]);
    const [id, setId] = useState(0);
    const link = 'Bairro';

    useEffect(() => {
        setBairrosFiltrados(bairrosRefatorados());
    }, [filter, bairros]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        console.log(value.toString());
        setInputValue(value);
        setFilter(value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value;
            setInputValue(value);
            setFilter(value);
        }
    };

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

    const bairrosRefatorados = () => {
        if (!bairros || !filter) return bairros;
        return bairros.filter((a) => a['nome'].toUpperCase().includes(filter.toUpperCase()));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItens({ link });
                setBairros(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <Loading />;
    if (error) return <ImagemErro />;

    return (
        <div>
            <WarningSpanStyled style={{ display: open ? 'flex' : 'none' }}>
                <p>Deseja realmente excluir o item?</p>
                <div>
                    <button onClick={() => itemDelete(id)}>Sim</button>
                    <button onClick={() => setOpen(false)}>Cancelar</button>
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
                    <IconSearchStyled onClick={() => handleInputChange} />
                    <IconAddItemStyled />
                </DivWarpperTextFixed>
            </DivWarpperTextAlign>
            <div>
                <TableStyledWraper>
                    <thead>
                        <tr style={{ backgroundColor: 'gray', color: '#fff' }}>
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
                            <th style={{ display: 'flex', alignItems: 'center', border: 'none' }}>
                                Quantidade
                                <select
                                    style={{ margin: '5px', borderRadius: '5px', fontSize: '15px', border: 'none', fontFamily: 'sans-serif', display: open ? 'none' : 'block' }}
                                    onChange={(event) => setSelectPage(+event.target.value)}
                                    value={selectPage}
                                >
                                    {quantidadeItensPage.map((pages) => (
                                        <option key={pages} value={pages}>
                                            {pages}
                                        </option>
                                    ))}
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bairrosFiltrados.slice(0, selectPage).map((bairro) => (
                            <tr key={bairro.id}>
                                <td style={{ display: 'none' }}>
                                    <DivWarpper>
                                        <InputCheckboxStyled type='checkbox' />
                                    </DivWarpper>
                                </td>
                                <th style={{ display: 'none' }}>{bairro.id}</th>
                                <th>{bairro.nome}</th>
                                <th>{bairro.valorFrete}</th>
                                <TableDataItenStyled>{bairro.IsentaFrete ? 'Sim' : 'Não'}</TableDataItenStyled>
                                <TableDataItenStyled>{bairro.cidadeId}</TableDataItenStyled>
                                <th>
                                    <IconEditButtonsStyled />
                                    <IconExcudeButtonStyled onClick={() => { setId(bairro.id), setOpen(true) }} />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </TableStyledWraper>
            </div>
        </div>
    );
}

export default BairroGrid;
