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
    TableHeaderItenStyled,
    DivGlobal,
    TrStyled,
    SelectStyled,
    TrBodyStyled
} from './Global/GridGeneric.module.js';
import Loading from '../../loading/Loading.jsx';
import ImagemErro from '../../loading/ImagemErro';
import Refresh from '../../utils/Refresh.jsx';
import {
    getItens,
    deleteItem,
    getItensById
} from '../../data/cadastros/CrudGeneric.jsx';
import TBody from '../../Genericos/TBody.jsx'
import { useNavigate } from 'react-router-dom';
import ModalForm from '../../Formularios/ModalForm.jsx';
import FormBairroFields from '../../CamposFormularios/FormBairroFields.jsx'
import {
    IconsCheckStyled,
    IconNoCheckedStyled
} from '../../IconsStyled.module.js'
import { ButtonStyled } from '../../Genericos/Button.module.js';
import {
    IconSavedStyled,
    IconCancelStyled
} from '../../IconsStyled.module.js'

const BairroGrid = () => {
    const [bairros, setBairros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpenModal, setOpenModal] = useState(false);
    const [error, setError] = useState('');
    const [selectPage, setSelectPage] = useState(20);
    const quantidadeItensPage = [5, 10, 15, 20, 50];
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('');
    const [open, setOpen] = useState(false);
    const [bairrosFiltrados, setBairrosFiltrados] = useState([]);
    const [id, setId] = useState(0);
    const link = 'Bairro';
    const city = 'Cidade';

    const navigate = useNavigate();

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
                setBairrosFiltrados(bairrosRefatorados());
                setBairros(data);

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [filter, bairros]);

    if (loading) return <Loading />;
    if (error) return <ImagemErro />;

    return (
        <div>
            <ModalForm isOpen={isOpenModal} setOpenModal={setOpenModal}>
                <FormBairroFields idEdit={id} />
            </ModalForm>
            <WarningSpanStyled style={{ display: open ? 'flex' : 'none' }}>
                <p>Deseja realmente excluir o item?</p>
                <div>
                    <ButtonStyled onClick={() => itemDelete(id)}><IconSavedStyled /></ButtonStyled>
                    <ButtonStyled onClick={() => setOpen(false)}><IconCancelStyled /></ButtonStyled>
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
                    <IconAddItemStyled onClick={() => { setId(0), setOpenModal(!isOpenModal) }} />
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
                            <th style={{ display: 'flex', alignItems: 'center', border: 'none' }}>
                                Quantidade
                                <SelectStyled
                                    onChange={(event) => setSelectPage(+event.target.value)}
                                    value={selectPage}
                                >
                                    {quantidadeItensPage.map((pages) => (
                                        <option key={pages} value={pages}>
                                            {pages}
                                        </option>
                                    ))}
                                </SelectStyled>
                            </th>
                        </TrStyled>
                    </thead>
                    <TBody>
                        {bairrosFiltrados.slice(0, selectPage).map((bairro) => (
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
                                <TableDataItenStyled>{bairro.cidadeId}</TableDataItenStyled>
                                <th>
                                    <IconEditButtonsStyled onClick={() => { setId(bairro.id), setOpenModal(!isOpenModal) }} />
                                    <IconExcudeButtonStyled onClick={() => { setId(bairro.id), setOpen(true) }} />
                                </th>
                            </TrBodyStyled>
                        ))}
                    </TBody>
                </TableStyledWraper>
            </DivGlobal>
        </div>
    );
}

export default BairroGrid;
