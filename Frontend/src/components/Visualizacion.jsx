import React, { useEffect, useState } from 'react'
import styles from "../styles/Visualizacion.css"

const Visualizacion = () => {

  useEffect(() => {
    getTotalVentas();
    getTotalUnidades();
  },[])

  const [totalVentas,setTotalVentas] = useState();
  const [totalUnidades,setTotalUnidades] = useState(); 

  async function getTotalVentas(){
    const url = await fetch("http://localhost:400/totalVentas");
    const info = await url.json();
    info.map(e => setTotalVentas(e.suma))
  }

 

  async function getTotalUnidades(){
    const url = await fetch("http://localhost:400/totalUnidades")
    const info = await url.json();
    info.map(e => setTotalUnidades(e.suma))
  }

  return (
  <section className="container blogs">
  <h1 className="heading-1">Total Ventas y Unidades Vendidas</h1>

  <div className="container-blogs">
    <div className="card-blog">
      <div className="container-img">
        <div className="button-group-blog">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span>
            <i className="fa-solid fa-link"></i>
          </span>
        </div>
      </div>
      <div className="content-blog">
        <h3>Total Ventas</h3>
        <span>{totalVentas} </span>
      </div>
    </div>
    <div className="card-blog">
      <div className="container-img">
        <div className="button-group-blog">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span>
            <i className="fa-solid fa-link"></i>
          </span>
        </div>
      </div>
      <div className="content-blog">
        <h3>Total Unidades Vendidas</h3>
        <span>{totalUnidades} </span>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Visualizacion