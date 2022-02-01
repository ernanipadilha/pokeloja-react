import { Link } from "react-router-dom"
export function PokeList(){
    return(
        <ul>
            {['Pikachu','Squirtle'].map((pokemon, index) => 
            <li key={index}>
                <Link to={`/pokemons/${pokemon}`}>{pokemon} </Link>
                </li>)}
        </ul>
    )
}