import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './cadastro.css';

export default function Cadastro(){
    const [usuarios, setUsuarios] = useState([])
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    
    function handleUsers(){
        const user = {"name": name, "username": username, "email": email, "password": password}
        setUsuarios(current => [...current, user])
        useNavigate('/')
    }
    return(
        <div className='Cadastro'>
            <div className='cadastro-forms'>
                <h1>Cadastro</h1>
                <input type="text" placeholder='Nome completo' value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder='Nome de usuário' value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="email"  placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password"  placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" onClick={handleUsers}>Cadastrar</button>
                <span className="link" onClick={handleUsers}>
                    Já possui cadastro? Faça seu Login
                </span>
                
            </div>
        </div>
    )
}