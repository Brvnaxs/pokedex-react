import { useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../header/Header"
import List from "../list-pokemons/List"

import "./home.css"
export default function Home(){
   const {username} = useParams()
   const [favs, setFavs] = useState(0)

   function HandleFavorite(){
    setFavs(favs+1)
}

    return(
        <div className="Home">
            <Header  username={username} favoritos={favs}/>
            <List  funcFav={HandleFavorite}/>
        </div>
    )

}
