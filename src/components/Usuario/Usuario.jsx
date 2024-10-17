export const Usuario = ( {name, age = 'sin especificar', nationality} ) => {

    return (
      <div>
        <h1>Nombre: {name} </h1>
        <p>Edad: {age}</p>
        <p>Nacionalidad: {nationality} </p>
        <hr />
      </div>
    )
  }

  //export default Usuario; => tambien es valido exportar de esta manera