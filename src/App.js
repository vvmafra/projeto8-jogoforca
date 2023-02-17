import { useState } from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "./palavras"
import image0 from "./images/forca0.png"
import image1 from "./images/forca1.png"
import image2 from "./images/forca2.png"
import image3 from "./images/forca3.png"
import image4 from "./images/forca4.png"
import image5 from "./images/forca5.png"
import image6 from "./images/forca6.png"

function App() {
  const images = [ image0, image1, image2, image3, image4, image5, image6]
  const [triedLetter, setTriedLetter] = useState([])
  const [disableLetter, setDisableLetter] = useState("disable")
  const [randomWord, setRandomWord] = useState([])
  const [countingError, setCountingError] = useState(0)
  const [wordAppeared, setWordAppeared] = useState([])


  function ableDisableLetter() {
    setDisableLetter("able")
}

  function addWordTried(alphabet){
    setTriedLetter([...triedLetter, alphabet])
  }

  function chooseWord(){
    const newRandomWord = palavras[Math.floor(Math.random() * palavras.length)];
    setRandomWord(newRandomWord.split(''))
    const underlineArray = Array(newRandomWord.length).fill('_')
    setWordAppeared(underlineArray)
  }


  function increaseError(){
    const sumError = countingError+1
    setCountingError(sumError)
  }


  function startGame() {
    ableDisableLetter()
    chooseWord()
  }

  return (
    <>
    <Jogo wordAppeared={wordAppeared} randomWord={randomWord} images={images} startGame={startGame} triedLetter={triedLetter} randomWord={randomWord} countingError={countingError}/>
    <Letras triedLetter={triedLetter} addWordTried={addWordTried} disableLetter={disableLetter}/>
    </>
  );
}

export default App;