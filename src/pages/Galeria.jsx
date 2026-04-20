import '../App.css'
import { useState } from 'react';
const fs = require('fsx')

const fotos = ['/gabiela.jpg', '/gabiela.jpg', '/gabiela.jpg', '/kuromi.jpeg', '/kuromi-gif.gif', '/kuromi-laughing-gif.gif']

export default function Galeria() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="galeria">
      {fotos.map(foto => (
        <img 
          src={foto}
          onClick={() => setSelected(foto)} 
        />
      ))}

      {selected && (
        <img 
          src={selected}
          onClick={() => setSelected(null)} 
          className="foto-ampliada"
        />
      )}
    </div>
  )
}