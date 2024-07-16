import React, { useState } from 'react'
import './Grid.css';
import { CiSearch } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import Table from 'react-bootstrap/Table';
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { deleteItem } from '../../data/cadastros/CrudGeneric';
import Refresh from '../utils/Refresh';
import Verdadeiro from './Verdadeiro';
import Falso from './Falso';
import Modal from '../modal/Modal';

const Grid = ({ itens, redirect, columns, filterEntry, link }) => {

    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('');
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
        setFilter(inputValue);
    };

    const filteredItens = itens.filter(item =>
        item[filterEntry] && item[filterEntry].toLowerCase().includes(filter.toLowerCase())
    );

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setFilter(inputValue);
        }
    };

    const getKeys = (itens) => {
        const allKeys = itens.flatMap(item => Object.keys(item));
        return [...new Set(allKeys)];
    };

    const formatItens = (item) => {
        if (typeof item === 'boolean') {
            return item ? <Verdadeiro /> : <Falso />
        } else if (typeof item === 'number')
            return `R$ ${item.toFixed(2)}`
        else {
            return item;
        }
    };

    const COMFIRM_BUTTON_STYLED = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        paddingTop: '10px'
    }

    const itemDelete = async (id) => {
        try {
            let response = await deleteItem({ link, id });
            Refresh();
            console.log(response);
            setOpen(!open);
        } catch (error) {
            console.error(`Error deleting item with id ${id}:`, error);
        }
    };


    const filteredKeys = getKeys(itens);

    return (
        <>
            <div className='relative'>
                <div className="fixed">
                    <div className="global-main-search-grid">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder='Pesquise aqui!'
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        />
                        <div className="class-button-grid">
                            <Button variant="info"><CiSearch id='search-button' onClick={handleSearchClick} /></Button>
                            <Button variant="success"><a href={redirect}><IoAddOutline id='new-form-include-edit' /></a></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Table striped bordered hover className='overflow'>
                    <thead>
                        <tr>
                            <th className='hidden' key={columns[1]}>#</th>
                            <th>{columns[1]}</th>
                            <th>{columns[2]}</th>
                            <th>{columns[3]}</th>
                            <th>{columns[4]}</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItens.map((item) => (
                            <tr key={item.id}>
                                <td className='hidden' >{formatItens(item[filteredKeys[0]])}</td>
                                <td style={{ fontWeight: '500' }}>{formatItens(item[filteredKeys[1]])}</td>
                                <td style={{ fontWeight: '500' }}>{formatItens(item[filteredKeys[2]])}</td>
                                <td style={{ fontWeight: '500' }}>{formatItens(item[filteredKeys[3]])}</td>
                                <td style={{ fontWeight: '500' }}>{formatItens(item[filteredKeys[4]])}</td>
                                <td className='option-grid'>
                                    <div>
                                        <Button variant='outline-success'><CiEdit /></Button>
                                        <Button variant='outline-danger' onClick={() => { setOpen(!open), setId(item.id) }}><FaRegTrashAlt /></Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div >
            <Modal isOpen={open} setModalOpen={() => setOpen(!open)}>
                <div>
                    <h3>Deseja Excluir o item?</h3>
                </div>
                <div style={COMFIRM_BUTTON_STYLED}>
                    <Button variant='outline-success' onClick={() => itemDelete(id)}>Excluir</Button>
                    <Button variant='outline-danger' onClick={() => setOpen(!open)}>Cancelar</Button>
                </div>
            </Modal>
        </>
    );
}

export default Grid;