
import React, {useEffect, useState} from 'react'
import Card from '../Card/Card'

const urlApi = 'https://rickandmortyapi.com/api/character'


const MiApi = props => {
    const {palabra, setPalabra} = props

    const [dataRickAndMorty, setDataRickAndMorty] = useState([])

    useEffect(()=>{
          getRickAndMorty()
    },[])
  
    const getRickAndMorty = async()=>{
        const response = await fetch(urlApi)
        const data = await response.json()
        setDataRickAndMorty(data.results)
       
    }
  return (
    
    <div>
        <Card personaje={dataRickAndMorty} palabra={palabra}/>
    </div>
  )
}

export default MiApi
