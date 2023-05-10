import { Link } from "react-router-dom";
import './login.css';

export default function Login() {
    return (
        <div className='Login'>
            <div className='login-forms'>
                <h1>Login</h1>
                <input type="email" name="" id="" placeholder='Email' />
                <input type="password" name="" id="" placeholder='Senha' />
                <button type="submit">Entrar</button>
                <Link className="link" to="/cadastro">
                Ainda não possue cadastro? Cadastre-se já
                </Link>
            </div>
        </div>
    )
}
