import { useState, useEffect } from "react"


export const TextInput = () => {

    const [inputText, setInputText] = useState("")

    const changeText = (e) => {
        setInputText(e.target.value);
    }

    useEffect( () => {
        console.log('componente montado');
        
    }, [])

    useEffect( () => {
        console.log('texto modificado');
        
    }, [inputText])
    

    return (
        <div>
            <input type="text" placeholder="escriba algo aqui" onChange={changeText} />

            <p>{inputText}</p>
        </div>
    )
}
