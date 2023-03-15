import React from 'react';
import CardRow from './CardRow';
import { useState, useEffect } from 'react';

const Card = props => {

    const {personaje, palabra} = props

    const [results,setResut] = useState([])

    useEffect(() => {
        setResut(personaje);
    },[personaje])

    useEffect(()=> {
      if (palabra === "") {
        setResut(personaje);
      } else {
        setResut(personaje.filter(
          (user) =>
            user.name.toLowerCase().includes(palabra.toLowerCase()) 
        ));}
    },[palabra])
     
  return (
    <div className='container'>

        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead className='bg-primary text-white'>

            </thead>
            <tbody>
              {results.length > 0 ? (
                  results.map(user => <CardRow key={user.id} user={user} />)
                ) : (
              <tr>
                <td>No hay resultados</td>
              </tr>
            )}
           
            </tbody>
        </table>
    </div>
  )
}

export default Card
