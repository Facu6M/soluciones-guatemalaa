import React, { useEffect, useState } from 'react'
// Importo todo lo de react chart
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {

    useEffect(() => {
        getCharts()
    },[])

    const totalVentas = []
    const fechaVentas = []

    async function getCharts(){
        const url = await fetch("http://localhost:400/marcas");
        const info = await url.json();
        info.map(e => {
            totalVentas.push(e.total_venta)
        })
        info.map(e => {
            fechaVentas.push(e.fecha_venta)
        })
        obtenerMes()
      }
   
// Creo el cuadro
const [data,setData] = useState([]);

var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  console.log(totalVentas.length)

  function obtenerMes(){
    let info = []
    let ventaNumero = []
    totalVentas.map(e => {
        ventaNumero.push(e)
    })
    let mes = []
    fechaVentas.map(e => {
       mes.push(e[5] + e[6])
    })
    for(let i=1; i < 100; i++)
    if (mes == i){
      info.push(ventaNumero)
    }
    else{
      info.push(0)
    }

    setData(info)
  }

console.log(data)

  
  
  

var misoptions = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
      x: {
        ticks: { color: "rgba(0, 220, 195)" },
      },
    },
  };

  var midata = {
    labels: meses,
    datasets: [
      {
        label: "Ventas $",
        data: data,
        backgroundColor: "rgba(0, 220, 195, 0.5)",
      },
    ],
  };


  return (
    <div>
        <h1>Charts</h1>
        <Bar data={midata} options={misoptions} />
    </div>
  )
}

export default LineChart