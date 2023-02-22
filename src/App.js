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
  let letterX = "";
  let gameStart = "";
  let underlineArray = [];
  const images = [image0, image1, image2, image3, image4, image5, image6]
  const [classImage, setClassImage] = useState("none")
  const [disableFindWord, setDisableFindWord] = useState(false)
  const [triedLetter, setTriedLetter] = useState([])
  const [classDisableLetter, setClassDisableLetter] = useState("disable")
  const [randomWord, setRandomWord] = useState([])
  const [countingError, setCountingError] = useState(0)
  const [wordAppeared, setWordAppeared] = useState([])
  const [disable, setDisable] = useState(true)

  console.log(triedLetter)
  console.log(randomWord)
  console.log(countingError)

  function showImage() {
    setClassImage("")
  }

  function functionDisableFindWord(){
    setDisableFindWord(true)
  }
  
  function functionDisableLetter() {
    if (gameStart === 1)  {
      setClassDisableLetter("")
    }
    setClassDisableLetter("able")
  }

  function disableLetter(){
    setDisable(false)
  }


  function chooseWord() {
    const newRandomWord = palavras[Math.floor(Math.random() * palavras.length)];
    setRandomWord(newRandomWord.split(''))
    underlineArray = Array(newRandomWord.length).fill('_')
    setWordAppeared(underlineArray)
  }

  function clickWord(alphabet) {
    console.log(alphabet)
    letterX = alphabet.toLowerCase();
    const newWordTried = [...triedLetter]
    setTriedLetter([...newWordTried, alphabet])
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i].includes(letterX)) {
        wordAppeared.splice(i, 1, randomWord[i])
        
      } else if (!randomWord.includes(letterX)){
        increaseError()
      }
    }
  }


  function increaseError() {
    const sumError = countingError + 1
    setCountingError(sumError)
  }


  function startGame() {
    functionDisableLetter()
    chooseWord()
    disableLetter()
    functionDisableFindWord()
    showImage()
    gameStart = 1;
  }

  return (
    <>
      <Jogo clickWord={clickWord} classImage={classImage} disableFindWord={disableFindWord} wordAppeared={wordAppeared} randomWord={randomWord} images={images} startGame={startGame} triedLetter={triedLetter} countingError={countingError} />
      <Letras clickWord={clickWord} disable={disable} triedLetter={triedLetter} classDisableLetter={classDisableLetter} />
    </>
  );
}

export default App;