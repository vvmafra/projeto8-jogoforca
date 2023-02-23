import { useState } from "react"

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const alfabetoUpper = alfabeto.map(str => str.toUpperCase());
    

    return (
        <div >
            <div className="container-letters">
                <div className="letters">
                    {alfabetoUpper.map((alphabet) => (
                    <button className={`box-letter ${props.triedLetter.includes(alphabet) && "disable"} ${props.classDisableLetter}`}
                    key={alphabet}
                    onClick={() => {props.clickWord(alphabet)}} 
                    disabled={((props.triedLetter.includes(alphabet)) || props.countingError === 6 || props.gameStart === 2) ? true : false}
                    data-test="letter"> 
                    {alphabet} </button>))}
                    
                </div>
            </div>
        </div>
    )

}