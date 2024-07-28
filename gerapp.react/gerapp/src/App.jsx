import React, { useState } from 'react';
import Template from './components/menu/template/Template'
import { AppContainer } from './App.module';
import MainRoute from './rotas/rotas/MainRoute';
import GlobalStyle from './globais/globalStyle.js';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppContainer>
      <Template isOpen={isOpen} toogleOpen={setIsOpen}>
      </Template>
      <MainRoute isOpen={isOpen} />
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
