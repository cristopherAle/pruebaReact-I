import React from 'react'


const Buscador = props => {

  const {palabra, setPalabra} = props

  return (
    <div className='mb-5'>
        <h2>Buscador de Personajes</h2>
        <input
         className="form-control w-50" type="text"  placeholder="Ingrese Personaje a buscar"
         onChange={(e) => setPalabra(e.target.value)}/>
          <br />
    </div>
  )
}

export default Buscador
