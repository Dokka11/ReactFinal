import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>¡Bienvenido a CSGOMARKET, tu destino definitivo para personalizar y mejorar tu experiencia en Counter-Strike: Global Offensive! Sumérgete en un mundo de creatividad y estilo con nuestra amplia selección de skins y aspectos únicos para armas y personajes. Ya seas un jugador casual o un veterano de CS:GO, encontrarás aquí las skins que harán que tus armas destaquen en el campo de batalla. Explora nuestra colección, descubre diseños impresionantes y asegúrate de tener la ventaja con las mejores skins. ¡Mejora tu arsenal y destaca en cada partida con CSGOMARKET!</p>
    </div>
  )
}

export default Nosotros