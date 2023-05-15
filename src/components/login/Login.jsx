import { Link, useNavigate } from "react-router-dom";
import './login.css';
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    function Handle(){
        navigate(`/home/${username}`)
    }
    return (
        <div className='Login'>
            <div className='login-forms'>
                <h1>Login</h1>
                <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input type="text" placeholder="Senha" />
                <button type="submit" onClick={Handle}>Entrar</button>
                <Link className="link" to="/cadastro">
                Ainda não possue cadastro? Cadastre-se já
                </Link>
            </div>
        </div>
    )
}
