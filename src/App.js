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
  let underlineArray = [];
  const images = [image0, image1, image2, image3, image4, image5, image6]
  const [classImage, setClassImage] = useState(0)
  const [disableFindWord, setDisableFindWord] = useState(false)
  const [triedLetter, setTriedLetter] = useState([])
  const [classDisableLetter, setClassDisableLetter] = useState("disable")
  const [randomWord, setRandomWord] = useState([])
  const [countingError, setCountingError] = useState(0)
  const [wordAppeared, setWordAppeared] = useState([])
  const [disable, setDisable] = useState(true)
  const [gameStart, setGameStart] = useState(0)
  const [classGreen, setClassGreen] = useState("")

  console.log("tentativas", triedLetter)
  console.log("palavra aleatoria criada", randomWord)
  console.log("contagem de erros", countingError)


  function startGame() {
    if (gameStart === 0) {
      functionDisableLetter()
      chooseWord()
      disableLetter()
      functionDisableFindWord()
      setClassImage("")
      setGameStart(1)

    } else {

      setGameStart(3)
      setClassGreen("")
      chooseWord()
      setClassDisableLetter("able")
      setTriedLetter([])
      setCountingError(0)
    }
  }

  function functionDisableLetter() {
    if (gameStart === 1 || gameStart === 2) {
      setClassDisableLetter("")
    }
    setClassDisableLetter("able")
  }

  function chooseWord() {
    const newRandomWord = palavras[Math.floor(Math.random() * palavras.length)];
    setRandomWord(newRandomWord.split(''))

    underlineArray = Array(newRandomWord.length).fill('_')
    setWordAppeared(underlineArray)
  }

  function disableLetter() {
    setDisable(false)
  }

  function functionDisableFindWord() {
    setDisableFindWord(true)
  }

  function clickWord(alphabet) {
    if (gameStart !== 0) {
    let sumError = countingError
    letterX = alphabet.toLowerCase();

    const newWordTried = [...triedLetter]
    setTriedLetter([...newWordTried, alphabet])

    const lengthRandom = randomWord.length

    for (let i = 0; i < lengthRandom; i++) {
      const pos = randomWord[i]

      if (pos.includes(letterX)) {
        wordAppeared.splice(i, 1, pos)
      }

      else if (!randomWord.includes(letterX)) {
        sumError = increaseError()
      }
      
    }

    checkFinishGame(sumError)
  }
  }

  function increaseError() {
    const sumError = countingError + 1;
    setCountingError(sumError);
    return sumError;
  }

  function checkFinishGame(countingError) {
    if (countingError >= 6) {
      setGameStart(2)
      loseGame()
    }
    else if (countingError < 6 && !wordAppeared.includes("_")) {
      setGameStart(2)
      winGame()
    }
  }

  function winGame() {
    setClassGreen("green")
    setDisableFindWord(false)
  }

  function loseGame() {
    setClassGreen("red")
    setDisableFindWord(false)
    setWordAppeared(randomWord)
  }

  return (
    <>
      <Jogo clickWord={clickWord} classGreen={classGreen} classImage={classImage} disableFindWord={disableFindWord} wordAppeared={wordAppeared} randomWord={randomWord} images={images} startGame={startGame} triedLetter={triedLetter} countingError={countingError} />
      <Letras clickWord={clickWord} disable={disable} triedLetter={triedLetter} classDisableLetter={classDisableLetter} gameStart={gameStart} countingError={countingError} />
    </>
  );
}

export default App;