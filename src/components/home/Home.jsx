import { useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../header/Header"
import List from "../list-pokemons/List"

export default function Home(){
   const {username} = useParams()
    return(
        <div className="Home">
            <Header props={username} />
            <List />
        </div>
    )

}
