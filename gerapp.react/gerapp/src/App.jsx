import React, { useState } from 'react';
import Sidebar from './components/menu/lateral/Sidebar'
import './App.css';
import Navbar from './components/menu/superior/Navbar';
import MainRoute from './components/Rotas/MainRoute';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <MainRoute isOpen={isOpen} />

    </div>
  );
};

export default App;
