import React, { useEffect, useState } from "react";


function PokeList() {

    const [currentList, setCurrentList] = useState({});
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    const [next, setNext] = useState('');
    const [prev, setPrev] = useState('');

    const handleNext = () => {
        setUrl(next)
    }

    const handlePrev = () => {
        prev && setUrl(prev)
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setCurrentList(data);
                setNext(data.next);
                setPrev(data.previous)


            })

    }, [url])

    console.log(url);


    return (
        <div>
            {currentList.results &&
                <div>
                    {currentList.results.map((pokemon) => {
                        return (
                            <div key={pokemon.name}>
                                <h2>{pokemon.name}</h2>
                            </div>
                        )
                    })}
                    <button onClick={handlePrev}>prev</button>
                    <button onClick={handleNext}>next</button>
                </div>
            }
        </div>
    )
}

export default PokeList