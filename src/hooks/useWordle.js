import { useState, useMemo, useCallback } from "react";
import { getCurrentGuessIndex } from '../utils/guessUtils';

function useWordle(words, solution, numGuesses, wordLen) {
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState(Array(numGuesses).fill(null));
    let won = useMemo(()=> guesses.includes(solution), [guesses, solution]);
    let lost = useMemo(()=>{return guesses.includes(null) === false && won === false}, [guesses, won]);

    const handleKeyDown = useCallback((e) => {
        if(e.repeat) return;

        switch(e.key.toUpperCase()){
            case 'ENTER':
                if(currentGuess.length < wordLen) {
                    alert("Not enough letters");
                    return;
                }

                if(words.includes(currentGuess.toUpperCase()) === false) {
                    alert("Not in word list");
                    return;
                }

                setGuesses((oldGuesses)=> {
                    const newGuesses = [...oldGuesses];
                    newGuesses[getCurrentGuessIndex(oldGuesses)] = currentGuess.toUpperCase();
                    return newGuesses;
                })
                setCurrentGuess('');
                
                break;
            case 'BACKSPACE':
                setCurrentGuess((cg)=>cg.slice(0,-1));
                break;
            default:
                if(e.key.toUpperCase().match(/^[A-Z]$/) === null) {
                    return;
                }

                if(currentGuess.length === wordLen) {
                    return;
                }

                setCurrentGuess(cg=>cg + e.key);
        }
    }, [currentGuess, wordLen, setCurrentGuess, setGuesses, words]);

    return {currentGuess, guesses, handleKeyDown, won, lost};
}

export default useWordle;