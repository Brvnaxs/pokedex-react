import { Link } from "react-router-dom";
import './cadastro.css';

export default function Cadastro(){
    return(
        <div className='Cadastro'>
            <div className='cadastro-forms'>
                <h1>Cadastro</h1>
                <input type="text" placeholder='Nome completo' />
                <input type="text" placeholder='Nome de usuário' />
                <input type="email" name="" id="" placeholder='Email' />
                <input type="password" name="" id="" placeholder='Senha' />
                <button type="submit">Cadastrar</button>
                <Link to='/'>
                <span>Já possui cadastro? Faça seu Login</span>
                </Link>
                
            </div>
        </div>
    )
}