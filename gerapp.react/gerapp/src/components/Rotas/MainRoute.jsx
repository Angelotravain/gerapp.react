import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClienteGrid from './Cadastros/ClienteGrid';
import './MainRoute.css';
import BairroGrid from './Cadastros/BairroGrid';

const MainRoute = ({ isOpen }) => {
    return (
        <div className={`main-content ${isOpen ? 'shift' : ''}`}>
            <Router>
                <Routes>
                    <Route path="/Cliente" element={<ClienteGrid />} />
                    <Route path='/Bairro' element={<BairroGrid />} />
                </Routes>
            </Router>
        </div>
    );
};

export default MainRoute;