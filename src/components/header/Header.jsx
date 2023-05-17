import './header.css';
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/pokebola.png"
export default function Header({username, favoritos}){
    const navigate = useNavigate();
function goToFavs(){
    navigate('/favoritos')
}
    return(
        <div className='Header'>
            <img src={logo} alt="" />
            <h1>Pokedex</h1>
            
            {<div className='favs' onClick={goToFavs}>
                <MdFavoriteBorder className='icon' />
                <span>{favoritos}</span>
            </div>}
            <h2>{username}</h2>
        </div>
        
    )
}