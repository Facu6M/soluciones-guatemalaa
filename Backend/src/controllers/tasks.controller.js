const { config } = require("dotenv")
const mysql = require("mysql")
const XLSX = require("xlsx");
const express = require("express")

const pool = mysql.createConnection({
    host:"bcu7dec8g3m6znztqiqu-mysql.services.clever-cloud.com",
    user:"u6gwwoia69uksvut",
    password:"BMOTPoOfuLoCZaJebF41",
    database:"bcu7dec8g3m6znztqiqu",
 })

const middle = express.urlencoded({
  extended:false,
  limit:10000,
  parameterLimit:2,
})

const totalVentas = 2
// SUBIR FILE Y LEERLO
const createFile = (req,res) => {
  let valor = (req.file.buffer)
  const excel = XLSX.read(valor);
  const nombreHoja = excel.SheetNames;
  const datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
  // pasar el date del excel a que este en formato para pasarlo a base de datos
  datos.map(e => {
      let excelSerialDate = e.fecha_venta
      let info =  new Date(Date.UTC(0, 0, excelSerialDate));
  })

  const response = "INSERT INTO Clientes(`nombre`, `apellido`, `correo_electronico`) VALUES (?)";

  const values = [
    datos.map(e => 
    e.nombre,
    e.apellido,
    e.correo_electronico   
  )
  ];
  pool.query(response, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
}




// obtener el total de ventas
const getTotalVentas =  (req, res) => {
  const response = "SELECT total_venta FROM Ventas";
  pool.query(response, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};

const getTotalUnidades =  (req,res) => {
  const response = "SELECT cantidad FROM Ventas";
  pool.query(response, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};


module.exports = {
  createFile,
  getTotalVentas,
  getTotalUnidades
};




