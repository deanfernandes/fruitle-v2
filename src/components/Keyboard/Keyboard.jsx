import Key from "./Key";

const uppercaseLetters = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"
];

export default function Keyboard() {
  return (
    <div className="keyboard">
      {uppercaseLetters.map((k)=>{
        return <Key key={k} char={k} />
      })}
    </div>
  )
}