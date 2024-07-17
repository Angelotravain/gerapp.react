import React, { useState } from 'react';
import Sidebar from './components/menu/lateral/Sidebar'
import './App.css';
import Navbar from './components/menu/superior/Navbar';
import MainRoute from './components/Rotas/MainRoute';
import styled from 'styled-components'

// .app {
//   display: flex;
//   flex - direction: column;
//   height: 100vh;
// }

// .app >.navbar {
//   flex: 0 0 auto;
// }

// .app >.main - content {
//   flex: 1 1 auto;
//   overflow - y: auto;
//   overflow - x: hidden;
// }


const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100dvw;
    height: 100dvh;
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
