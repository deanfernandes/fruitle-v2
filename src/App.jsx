import './App.css'
import { useState, useEffect } from 'react';
import Wordle from './components/Wordle';

const fruits = [
    "APPLE",
    "MANGO",
    "LEMON",
    "PEACH",
    "GUAVA",
    "BERRY",
    "MELON",
    "PLUMS",
    "OLIVE",
    "CHILI"
];

function App() {
  const [fruit, setFruit] = useState();
  useEffect(()=> {
    setFruit(fruits[Math.floor(Math.random() * fruits.length)]);
  }, []);

  return (
    <>
      <h1>Fruitle v2</h1>
      <Wordle words={fruits} solution={fruit}/>
    </>
  )
}

export default App