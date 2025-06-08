import Line from "./Line"
import { getCurrentGuessIndex } from "../utils/guessUtils";

export default function Board({currentGuess, guesses, solution}) {
    return (
        <div className="board">
            {guesses.map((g, i)=> {
                if(i === getCurrentGuessIndex(guesses)){
                    return <Line key={i} currentGuess={currentGuess} />
                } else {
                    return <Line key={i} guess={g} solution={solution}/>
                }
            })}
        </div>
    )
}