import { useState } from 'react';
import './App.css';
import Buscador from './components/Buscador/Buscador';
import MiApi from './components/MiApi/MiApi';

function App() {

  const [palabra, setPalabra] = useState('')

  return (
    <div>
      <h1>Conexión a API - Rick and Morty</h1>
      <div>
            <Buscador palabra={palabra} setPalabra={setPalabra}/>
       <hr />
            <MiApi palabra={palabra} setPalabra={setPalabra}/>
        <hr />
       

      </div>
    </div>

  );
}

export default App;
