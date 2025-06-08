import Tile from "./Tile";
import { WORD_LEN } from "../utils/constants";

function Line({currentGuess, guess, solution}) {
    if(currentGuess) {
        const fillTiles = (str) => {
            const chars = (str || '').split('').slice(0, WORD_LEN);
            return chars.concat(Array(WORD_LEN - chars.length).fill(''));
        };
        const chars = fillTiles(currentGuess);
        return (
            <div className="line current">
            {chars.map((c, i)=> {
                return <Tile key={i} char={c} bounce={c?true:false}/>;
            })}    
            </div>
        );
    }
    else if(guess) {
        return (
        <div className="line">
            {guess.split('').map((c, i)=> {
                let color = 'gray';
                if(c.toUpperCase() === solution[i]) {
                    color = 'green';
                }
                else if(solution.includes(c.toUpperCase())) {
                    color = 'yellow';
                }
                return <Tile key={i} char={c} color={color} />;
            })}    
        </div>
        );
    }
    else {
        const tiles = [];
        for(let i = 0; i < WORD_LEN; i++) {
            tiles.push(<Tile key={i} />);
        }
        return (
        <div className="line">
            {tiles}
        </div>
        );
    }
}

export default Line;