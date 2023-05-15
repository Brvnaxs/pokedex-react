import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import List from './components/list-pokemons/List';
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import Modal from './components/modal/Modal';
import Home from './components/home/Home';
import '../reset.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Login />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/home/:username' element={<Home />}/>
        <Route path='/pokes-infos/:id' element={<Modal />}/>
      </Routes>
    </div>
  )
}

export default App
