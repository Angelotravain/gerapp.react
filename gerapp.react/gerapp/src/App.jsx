import React, { useState } from 'react';
import Sidebar from './components/menu/lateral/Sidebar'
import Navbar from './components/menu/superior/Navbar';
import MainRoute from './components/Rotas/MainRoute';
import styled from 'styled-components'

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.texto};
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppWrapper>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <MainRoute isOpen={isOpen} />

    </AppWrapper>
  );
};

export default App;
