import Home from './paginas/Home';
import React from 'react';
import Destino from './paginas/Destino';
import Promocao from'./paginas/Promocao'
import Contato from './paginas/Contato'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'


function App() {
  const url = window.location.href;

  return (
    <div>
      {
        url === 'http://localhost:3000/Home' 
        ? <Home/>
        : url === 'http://localhost:3000/Destino' 
        ? <Destino/>
        : url === 'http://localhost:3000/Promocao' 
        ? <Promocao/>
        : url === 'http://localhost:3000/Contato' 
        ? <Contato/>
        : url === 'http://localhost:3000/Cadastro' 
        ? <Cadastro/>
        : url === 'http://localhost:3000/Login' 
        ? <Login/>
        : <Home/>
      }
    </div>
  );
}

export default App;
