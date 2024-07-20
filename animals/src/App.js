import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

//This make a random animals
function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
}

//This use state to catch the click 
function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  };

  const renderedAnimals = animals.map((animals, index) => {
    return <AnimalShow type={animals} key={index}/>
  });

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal, Dude!</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App;