function Tile({char, bounce = false, color}) {
    return (
        <div className={(bounce ? 'tile bounce ' : "tile ") + color}>
            {char}
        </div>
    )
}

export default Tile;