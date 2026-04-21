import '../App.css'
import { useState, useEffect } from 'react';

export default function Galeria() {
  const [fotos, setFotos] = useState([])
  const [selected, setSelected] = useState(null);
  const [galeria, setGaleria] = useState("gabiela");

  useEffect(() => {
    const pasta = galeria === "gabiela" ? "gabileria" : "nenemleria";

    fetch(`https://api.github.com/repos/felipov/gabiela/contents/public/galeria/${pasta}`)
      .then(res => res.json())
      .then(data => {
        setFotos(data.map(foto => foto.name))})
  }, [galeria]);

  const pasta = galeria === "gabiela" ? "gabileria" : "nenemleria";

  return (
    <div className="galeria">
      <div className="botoes-galeria">
        <p>🥰 escolha:</p>
        <button onClick={() => setGaleria("gabiela")}>
          <img src="/kuromi-felizinha.jpg" /> gabiela
        </button>

        <button onClick={() => setGaleria("nenem")}>
          <img src="/nenem.jpeg" /> nenem
        </button>
      </div>

      {galeria === "gabiela" && (
        <div className="gabileria">
          {fotos.map(foto => (
            <img 
              key={foto}
              src={`/galeria/${pasta}/${foto}`}
              onClick={() => setSelected(foto)} 
            />
          ))}
        </div>
      )}

      {galeria === "nenem" && (
        <div className="nenemleria">
          {fotos.map(foto => (
            <img 
              key={foto}
              src={`/galeria/${pasta}/${foto}`}
              onClick={() => setSelected(foto)} 
            />
          ))}
        </div>
      )}

        {selected && (
          <div className="overlay" onClick={() => setSelected(false)}>
            <img 
              src={`/galeria/${pasta}/${selected}`}
              className="foto-ampliada"
            />
          </div>
        )}
    </div>
      
  )
}