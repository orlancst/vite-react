import { useState } from "react";

export const Textt = () => {

    const [ show, setShow ] = useState(true);
    

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div>
            {show && <p>Click on the button below to hide this text.</p>}
            
            <button onClick={handleShow}>{show === true ? "Ocultar" : "Mostrar"}</button>
        </div>
    );
}