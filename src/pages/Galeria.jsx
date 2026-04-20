import '../App.css'
import { useState, useEffect } from 'react';

export default function Galeria() {
  const [fotos, setFotos] = useState([])
  const [selected, setSelected] = useState(null);
  const [galeria, setGaleria] = useState("gabileria");

  useEffect(() => {
    const pasta = galeria === "gabileria" ? "gabileria" : "nenemleria";

    fetch(`https://api.github.com/repos/felipov/gabiela/contents/public/galeria/${pasta}`)
      .then(res => res.json())
      .then(data => setFotos(data.map(foto => foto.name)))
  }, [galeria]);

  const pasta = galeria === "gabileria" ? "gabileria" : "nenemleria";

  return (
    <div>
      {galeria === "gabiela" && (
        <div className="gabileria">x
          {fotos.map(foto => (
            <img 
              src={`/galeria/${pasta}/${foto}`}
              onClick={() => setSelected(foto)} 
            />
          ))}
        </div>
      )}

      {galeria === "nenem" && (
        <div className="nenemleria">

        </div>
      )}

        {selected && (
          <div className="overlay" onClick={() => setSelected(false)}>
            <img 
              src={'/galeria/'+selected}
              className="foto-ampliada"
            />
          </div>
        )}
    </div>
      
  )
}