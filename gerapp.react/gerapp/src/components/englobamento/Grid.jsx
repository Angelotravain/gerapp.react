import React, { useState } from 'react'
import './Grid.css';
import { CiSearch } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import Table from 'react-bootstrap/Table';
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { deleteItem } from '../../data/cadastros/BairroCadastro';
import Refresh from '../utils/Refresh';

const Grid = ({ itens, redirect, columns, filterEntry, link }) => {

    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('');
    const [identification, setId] = useState(0);

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

    const itemDelete = async (id) => {
        try {
            let response = await deleteItem({ link, id });
            Refresh();
            console.log(response);
        } catch (error) {
            console.error(`Error deleting item with id ${id}:`, error);
        }
    };


    const filteredKeys = getKeys(itens);

    return (
        <>
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
            <div>
                <Table striped bordered hover>
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
                        {filteredItens.map((item, index) => (
                            <tr key={item.id}>
                                <td className='hidden' >{item[filteredKeys[0]]}</td>
                                <td>{item[filteredKeys[1]]}</td>
                                <td>{item[filteredKeys[2]].toFixed(2)}</td>
                                <td>{item[filteredKeys[3]]}</td>
                                <td>{item[filteredKeys[4]]}</td>
                                <td className='option-grid'>
                                    <div>
                                        <Button href='#' variant='outline-success'><CiEdit /></Button>
                                        <Button href='#' variant='outline-danger' onClick={() => itemDelete(item.id)}><FaRegTrashAlt /></Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div >
        </>
    );
}

export default Grid;