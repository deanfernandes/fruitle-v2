export function getCurrentGuessIndex(guesses) {
    return guesses.findIndex((guess)=>guess === null);
}