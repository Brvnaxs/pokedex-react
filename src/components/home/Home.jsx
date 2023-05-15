import { useState, useParams } from "react"
import Header from "../header/Header"
import List from "../list-pokemons/List"
const name = 'bru';
export default function Home(){
   
    return(
        <div className="Home">
            <Header props={name} />
            <List />
        </div>
    )

}
