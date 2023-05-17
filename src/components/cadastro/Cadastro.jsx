import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import usuarios from '../../usuarios';
import gif from "../../assets/espeon2.gif"
import './cadastro.css';

export default function Cadastro() {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    function handleUsers() {
        const user = { "name": name, "username": username, "email": email, "password": password }
        usuarios.push(user)
        navigate('/')
        console.log(usuarios)
    }
    return (
        <div className='Cadastro'>
            <img src={gif} alt="" />
            <div className='cadastro-forms'>
                <h1>Cadastro</h1>
                <input type="text" placeholder='Nome completo' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Nome de usuário' value={username} onChange={e => setUsername(e.target.value)} />
                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={handleUsers}>Cadastrar</button>
                <Link to="/" className="link">
                    Já possui cadastro? Faça seu Login
                </Link>
            </div>
        </div>
    )
}