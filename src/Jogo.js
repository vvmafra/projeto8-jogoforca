import { useState } from "react"


export default function Jogo(props) {
    

    return(
        <>
        <div className="game">
            <img src={props.images[props.countingError]}></img>
            <button class="choose" onClick={props.startGame}>Escolher Palavra</button>
        </div>
        <div className="wordSelected">
        {props.wordAppeared.map((au) => (<div className="letter-game"> <div class="each-letter">{ au }</div> </div>))}
        </div>
        </>
    )
}