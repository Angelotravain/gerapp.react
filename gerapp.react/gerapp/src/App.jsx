import React, { useState, useEffect } from 'react';
import Template from './components/menu/template/Template';
import { AppContainer } from './App.module';
import MainRoute from './rotas/rotas/MainRoute';
import GlobalStyle from './globais/globalStyle.js';
import LoginForm from './views/login/LoginForm.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isFuncLog, setFuncLog] = useState({});

  useEffect(() => {

    const loggedIn = sessionStorage.getItem('isLogin');

    setLogin(loggedIn);
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      {isLogin && isFuncLog ? (
        <>
          <Template isOpen={isOpen} toogleOpen={setIsOpen} />
          <MainRoute isOpen={isOpen} />
        </>
      ) : (
        <LoginForm validateLogin={setLogin} funcLog={setFuncLog} />
      )}
    </AppContainer>
  );
};

export default App;
