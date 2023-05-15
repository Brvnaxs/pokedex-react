import './header.css';
import { MdFavoriteBorder } from "react-icons/md";

export default function Header({props}){
    return(
        <div className='Header'>
            <h1>Pokedex</h1>
            {<div className='favs'>
                <MdFavoriteBorder className='icon'/>
                <span>1</span>
            </div>}
            <h2>{props}</h2>
        </div>
        
    )
}