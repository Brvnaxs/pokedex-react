import { Link, useNavigate } from "react-router-dom";
import './login.css';
import { useState } from "react";
import usuarios from "../../usuarios"
import gif from "../../assets/espeon2.gif"

export default function Login() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    function Handle(){
        for(var i = 0; i < usuarios.length; i++){
            if (usuarios[i].username == username && usuarios[i].password == password){
                navigate(`/home/${username}`)
            }
        }
        
    }
    
    return (
        <div className='Login'>
            <img src={gif} alt="" />
            <div className='login-forms'>
                <h1>Login</h1>
                <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" name="" id="" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={Handle}>Entrar</button>
                <Link className="link" to="/cadastro">
                Ainda não possue cadastro? Cadastre-se já
                </Link>
            </div>
        </div>
    )
}
