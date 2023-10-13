import React, { useEffect } from 'react'

const Visualizacion = () => {

  useEffect(() => {
    getTotalVentas();
    getTotalUnidades();
  })

  async function getTotalVentas(){
    const url = await fetch("http://localhost:400/totalVentas");
    const info = await url.json();
    console.log(info)
  }

  async function getTotalUnidades(){
    const url = await fetch("http://localhost:400/totalUnidades")
    const info = await url.json();
    console.log(info)
  }

  return (
    <div>
      <h1>Visualizacion Total Ventas y Unidades</h1>
    </div>
  )
}

export default Visualizacion