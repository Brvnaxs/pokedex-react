import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Header from "../header/Header"
import List from "../list-pokemons/List"

import "./home.css"
export default function Home(){
   const {username} = useParams();
   const [favs, setFavs] = useState(0);
    const [favorites, setFavorites] = useState([])
    const navigate = useNavigate();

   function HandleFavorite(id){
    setFavs(favs+1)
    setFavorites((current) => [id, ...current])
}
function goToFavs(){
    navigate(`/favoritos/${favorites}`)
}

    return(
        <div className="Home">
            <Header  username={username} favoritos={favs} goToFavs={goToFavs}/>
            <List  funcFav={HandleFavorite}/>
        </div>
    )

}
