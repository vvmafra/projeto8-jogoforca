import { useState } from "react"


export default function Jogo(props) {
    

    return(
        <>
        <div className="game">
            <img src={props.images[props.countingError]} className={`${props.classImage}`} data-test="game-image"></img>
            <button class="choose" onClick={props.startGame} disabled={props.disableFindWord} data-test="choose-word">Escolher Palavra</button>
        </div>
        <div className="wordSelected" data-test="word">
        {props.wordAppeared.map((au) => (<div className="letter-game"> <div className={`each-letter ${props.classGreen}`}>{ au }</div> </div>))}
        </div>
        </>
    )
}