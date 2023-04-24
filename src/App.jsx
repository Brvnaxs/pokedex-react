import { useState } from 'react';
import List from './components/list-pokemons/List';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import Modal from './components/modal/Modal';
import '../reset.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Modal />
    </div>
  )
}

export default App
