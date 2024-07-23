import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BairroGrid from '../tabelas/Cadastros/BairroGrid';
import Dashboard from '../tabelas/Home/Dashboard';
import BairroForm from '../formularios/cadastros/BairroForm';

const MainRoute = ({ isOpen }) => {
    return (
        <div className={`main-content ${isOpen ? 'shift' : ''}`}>
            <Router>
                <Routes>
                    {/* Home */}
                    <Route path='/' element={<Dashboard />} />
                    {/* Cadastros */}
                    {/* <Route path="/Cliente" element={<ClienteGrid />} /> */}
                    <Route path='/Bairro' element={<BairroGrid />} />

                    {/* Rotas de formulários */}
                    <Route path='/Bairro_form' element={<BairroForm />} />
                    {/* <Route path='/Bairro_form' element={<BairroForm />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default MainRoute;