import { useState } from "react"
import images from "./images"


export default function Jogo() {





    return(
        <>
        <div className="game">
            <img src={images[0]}></img>
            <button class="choose" disabled>Escolher Palavra</button>
        </div>
        
        </>
    )
}