import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import BairroGrid from '../../views/Cadastros/Bairro/BairroGrid';
import BairroForm from '../../views/formularios/cadastros/BairroForm';

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
                    <Route path='/Bairro_form' element={<BairroForm />} />

                </Routes>
            </Router>
        </MainContainer>
    );
};

export default MainRoute;