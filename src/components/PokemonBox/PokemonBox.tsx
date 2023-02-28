import { Pokemon } from "../../models/Pokemon";

export default function PokemonBox(props:Pokemon){
    return (
        <div>
            {/* {name:string,
    level: number,
    health: number,
    damage: number,
    img: string} */}
    <img src={props.img}/>
    <h4>{props.name}</h4>
    <p>level: {props.level}</p>
    <p>Health: {props.health}</p>
    <p>Damage: {props.damage}</p>
    
        </div>
    )
}