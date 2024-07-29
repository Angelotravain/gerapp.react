import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import BairroGrid from '../../views/Cadastros/Bairro/BairroGrid';
import BairroForm from '../../views/formularios/cadastros/BairroForm';
import ClienteGrid from '../../views/Cadastros/Cliente/ClienteGrid';
import FuncionarioGrid from '../../views/Cadastros/Funcionario/FuncionarioGrid';
import EmpresaGrid from '../../views/Cadastros/Empresa/EmpresaGrid';
import CargoGrid from '../../views/Cadastros/Cargo/CargoGrid';
import EquipamentoGrid from '../../views/Cadastros/Equipamento/EquipamentoGrid';
import FormaPagamentoGrid from '../../views/Cadastros/Financeiro/FormaPagamentoGrid';
import TipoEquipamentoGrid from '../../views/Cadastros/TipoEquipamento/TipoEquipamentoGrid';
import VeiculoGrid from '../../views/Cadastros/Veiculo/VeiculoGrid';
import LocacoesGrid from '../../views/Cadastros/Locacoes/LocacoesGrid';
import ContaAReceberGrid from '../../views/Cadastros/ContaReceber/ContaAReceberGrid';

const MainContainer = styled.div`
    z-index: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainRoute = ({ isOpen }) => {
    return (
        <MainContainer isOpen={isOpen}>
            <Router>
                <Routes>
                    {/* Home */}
                    <Route path='/Bairro' element={<BairroGrid />} />
                    <Route path='/Cliente' element={<ClienteGrid />} />
                    <Route path='/Funcionario' element={<FuncionarioGrid />} />
                    <Route path='/Cargo' element={<CargoGrid />} />
                    <Route path='/Empresa' element={<EmpresaGrid />} />
                    <Route path='/FormaPagamento' element={<FormaPagamentoGrid />} />
                    <Route path='/Equipamentos' element={<EquipamentoGrid />} />
                    <Route path='/TipoEquipamento' element={<TipoEquipamentoGrid />} />
                    <Route path='/Veiculo' element={<VeiculoGrid />} />
                    <Route path='/Locacao' element={<LocacoesGrid />} />
                    <Route path='/ContasAReceber' element={<ContaAReceberGrid />} />

                    {/* Rotas de formulário */}
                    <Route path='/Bairro_form' element={<BairroForm />} />
                </Routes>
            </Router>
        </MainContainer>
    );
};

export default MainRoute;