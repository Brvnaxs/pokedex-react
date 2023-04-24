import './header.css';
import { MdFavoriteBorder } from "react-icons/md";
export default function header(){
    return(
        <div className='Header'>
            <h1>bru's pokedex</h1>
            <div className='favs'>
                <MdFavoriteBorder className='icon'/>
                <span>1</span>
            </div>
            <h2>User</h2>
        </div>
    )
}