import { useState } from "react"

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const alfabetoMaiusculo = alfabeto.map(str => str.toUpperCase());
   
    

   

    function itIncludes(){
        if (alfabetoMaiusculo.map((l) => props.triedLetter.includes(l))) {
            return true
        }
    }

    
    

    return (
        <div >
            <div className="container-letters">
                <div className="letters">
                    {alfabetoMaiusculo.map((l) => (<button className={`box-letter ${props.disableLetter}`}
                    onClick={props.addWordTried} disabled={itIncludes}> {l} </button>))}
                </div>
            </div>
        </div>
    )

}