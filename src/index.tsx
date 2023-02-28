import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter/Counter';
import { Pokemon } from './models/Pokemon';
import { PokemonList } from './components/PokemonList/PokemonList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let pokemon:Pokemon = {
  damage: 20,
  health: 100,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  name: 'ditto',
  level: 3
}

let listOfPokemon:Pokemon[] = [
  {
    damage: 20,
    health: 100,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    name: 'ditto',
    level: 3
  }, {
    damage: 10,
    health: 100,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    name: 'random',
    level: 3
  }, {
    damage: 200,
  health: 100,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  name: 'firstPoke',
  level: 3
  }]


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element = {<App />}/>
      <Route path="/pokeList" element = {<PokemonList />}/>
    </Routes>
    </BrowserRouter>
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
