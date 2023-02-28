import axios from "axios";
import { useState } from "react"
import { Pokemon } from "../../models/Pokemon"
import { PokemonAPI } from "../../models/PokemonAPI";
import PokemonBox from "../PokemonBox/PokemonBox"

export function PokemonList(){
    
    const newPokemon:Pokemon = {
        damage: 0,
        health: 0,
        img: '',
        level: 0,
        name: ''
    }

    const[listOfPokemons, setListPoke] = useState<Pokemon[]>([])

    function onSubmitPoke(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${newPokemon.name}`)
        .then(response => {
            console.log(response.data);
            let myPoke:Pokemon = {
                damage: response.data.stats[1].base_stat,
                health: response.data.stats[0].base_stat,
                img: response.data.sprites.front_default,
                level: 10,
                name: response.data.name
            }
            setListPoke([myPoke, ...listOfPokemons]);
        })
    }

    function setNamePoke(event: React.ChangeEvent<HTMLInputElement>){
        newPokemon.name = event.target.value;
    }

    function deletePoke(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        for (let i = 0; i < listOfPokemons.length; i++){
            if (listOfPokemons[i].name == newPokemon.name){
                listOfPokemons.splice(i, 1);
            }
            
        }
    }

    return (
    <div>
        <h3>Add Pokemon</h3>
        <form className="grid" onSubmit={onSubmitPoke}>
            <label>Name</label>
            <input type="text" onChange={setNamePoke}></input>
            <br/>
            <input type="submit"></input>
        </form>

        <h3>Delete Pokemon</h3>
        <form className="grid" onSubmit={deletePoke}>
            <label>Name</label>
            <input type="text" onChange={setNamePoke}></input>
            <br/>
            <input type="submit"></input>
        </form>

        <h2>Pokemon List</h2>
        <div className = "grid-pokemon">
            {
                listOfPokemons.map(poke => {
                    return <PokemonBox key={poke.name} {...poke}/>
                })
            }
        </div>
    </div>)
}