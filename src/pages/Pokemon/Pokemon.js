import { useParams } from "react-router-dom"

export function Pokemon(){
    const {pokemonId} = useParams()
    console.log(pokemonId)
    return(
        <h1>Página do {pokemonId}</h1>
    )
}