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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos hic voluptates rerum, fuga distinctio vitae aperiam explicabo sit sequi vel adipisci! Optio ipsum, porro consectetur quia id cupiditate libero magni.
        Nobis officia quis odio laboriosam placeat dolorum, saepe sed! Debitis porro nam necessitatibus sint. Aliquid, tempore architecto ducimus quaerat quam soluta dolorum beatae rem aliquam distinctio, hic animi. Officia, pariatur?
        Atque dolor soluta voluptmpora molestias consequuntur numquam suscipit blanditiis id? Dolorem necessitatibus omnis odio nam libero accusantium non velit inventore, earum asperiores, quae molestias unde voluptas nemo voluptate.
        Molestias incidunt doloribus commodi vero sint aspernatur veritatis expedita? Placeat dicta cupiditate modi possimus illum consequuntur doloribus id perspiciatis nostrum nesciunt suscipit, reprehenderit, velit aliquid minima rem molestiae eius amet.
        Expedita laboriosam temporibus ratione in. Aut deserunt alias totam natus maxime sint laudantium, tempora cupiditate, quasi dolorum suscipit placeat ullam. Ipsum explicabo officia porro maiores tempore quaerat quibusdam quos eum.</p>
    </div>
  )
}

export default Nosotros