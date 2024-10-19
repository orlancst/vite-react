import { useEffect, useState } from 'react'

function Pokemon() {

    const [pokemon, setPokemon] = useState();
    const [id, setId] = useState(1);

    const handlePrev = () => {
        if (id > 1) {
            setId(id - 1);
        }
    }

    const handleNext = () => {
        if (id < 898) {
            setId(id + 1);
        }
    }

    console.log(id);
    

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => {
                return resp.json()

            })
            .then((data) => {
                setPokemon(data);

            })

    }, [id]) //asignamos la variable que queramos que se actualice

    return (
        <div>
            {
                pokemon &&
                <div>
                    <h2>{pokemon.name}</h2>
                    <p>ID: {pokemon.id}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <br />
                    {id > 1 ? <button onClick={handlePrev}>prev</button> : <button disabled>prev</button>}
                    <button onClick={handleNext}>next</button>
                </div>
            }

        </div>
    )
}

export default Pokemon