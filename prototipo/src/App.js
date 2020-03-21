import React from 'react';
import Home from './componentes/Home';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './componentes/login';
import Cadastro from './componentes/cadastro';
import Dashboard from './componentes/dashboard';



function  App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
    );
}

export default App;
