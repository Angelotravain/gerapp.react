import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClienteGrid from './Cadastros/ClienteGrid';
import './MainRoute.css';
import BairroGrid from './Cadastros/BairroGrid';
import FuncionarioGrid from './Cadastros/FuncionarioGrid';
import Empresagrid from './Cadastros/Empresagrid';
import CargoGrid from './Cadastros/CargoGrid';
import EquipamentoGrid from './Locacoes/EquipamentoGrid';
import LocacaoGrid from './Locacoes/LocacaoGrid';
import TipoEquipamentoGrid from './Locacoes/TipoEquipamentoGrid';
import VeiculoGrid from './Locacoes/VeiculoGrid';
import ContaReceberGrid from './Financeiro/ContaReceberGrid';
import FormaPagamentoGrid from './Financeiro/FormaPagamentoGrid';
import Dashboard from './Home/Dashboard';

const MainRoute = ({ isOpen }) => {
    return (
        <div className={`main-content ${isOpen ? 'shift' : ''}`}>
            <Router>
                <Routes>
                    {/* Home */}
                    <Route path='/' element={<Dashboard />} />
                    {/* Cadastros */}
                    <Route path="/Cliente" element={<ClienteGrid />} />
                    <Route path='/Bairro' element={<BairroGrid />} />
                    <Route path='/Funcionario' element={<FuncionarioGrid />} />
                    <Route path='/Empresa' element={<Empresagrid />} />
                    <Route path='/Cargo' element={<CargoGrid />} />
                    {/* Locações */}
                    <Route path='/Equipamento' element={<EquipamentoGrid />} />
                    <Route path='/Locacao' element={<LocacaoGrid />} />
                    <Route path='/TipoEquipamento' element={<TipoEquipamentoGrid />} />
                    <Route path='/Veiculo' element={<VeiculoGrid />} />
                    {/* Financeiro */}
                    <Route path='/ContaReceber' element={<ContaReceberGrid />} />
                    <Route path='/FormaPagamento' element={<FormaPagamentoGrid />} />


                    {/* Rotas de formulários */}

                    {/* <Route path='/Bairro_form' element={<BairroForm />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default MainRoute;