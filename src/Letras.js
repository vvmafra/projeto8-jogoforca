export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    

    const alfabetoMaiusculo = alfabeto.map(str => str.toUpperCase());

    return (
        <div >
            <div className="container-letters">
                <div className="letters" disabled>
                    {alfabetoMaiusculo.map((l) => (<div className="box-letter"> {l} </div>))}
                </div>
            </div>
        </div>
    )

}