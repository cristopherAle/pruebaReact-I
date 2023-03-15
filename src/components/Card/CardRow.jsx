import React from 'react'

const CardRow = ({user}) => {
    const {image, name, species} = user
    
  return (
    <div>
        <tr>
            <td><img src={image} alt=""/></td>
        </tr>
        <tr>
            <td>Nombre: {name}</td>
        </tr>
        <tr>
            <td>Especie: {species}</td>
        </tr>
    </div>
  )
}

export default CardRow
