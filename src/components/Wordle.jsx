import './Wordle.css'
import useWordle from '../hooks/useWordle';
import Board from './Board';
import { NUM_GUESSES, WORD_LEN } from '../utils/constants';
import { useEffect } from 'react';


export default function Wordle ({words, solution}) {
    const { currentGuess, guesses, handleKeyDown, won, lost } = useWordle(words, solution, NUM_GUESSES, WORD_LEN);
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
  
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    useEffect(() => {
        if (won) {
            window.removeEventListener('keydown', handleKeyDown);
            setTimeout(() => window.alert("gz u won :)"), 1500);
        }
        else if (lost) {
            window.removeEventListener('keydown', handleKeyDown);
            setTimeout(() => window.alert(`unlucky u lost :( (${solution})`), 1500);
        }
    }, [won, lost, handleKeyDown, solution]);
    return (
        <>
            <Board currentGuess={currentGuess} guesses={guesses} solution={solution}/>
        </>
    );
}