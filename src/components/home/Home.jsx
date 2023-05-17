import { useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../header/Header"
import List from "../list-pokemons/List"
import '../'
import "./home.css"
export default function Home(){
   const {username} = useParams()
    return(
        <div className="container">
        <div className="Home">
            <Header className="item" props={username} />
            <List className="item" />
        </div>
        </div>
    )

}
