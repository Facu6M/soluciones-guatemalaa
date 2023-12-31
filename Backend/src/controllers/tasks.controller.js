const { config } = require("dotenv")
const knex = require("knex")
const mysql = require("mysql")
const XLSX = require("xlsx");
const express = require("express")

const pool = require('knex')({
  client: 'mysql',
  connection: {
    host: "bcu7dec8g3m6znztqiqu-mysql.services.clever-cloud.com",
    user: "u6gwwoia69uksvut",
    password: "BMOTPoOfuLoCZaJebF41",
    database: "bcu7dec8g3m6znztqiqu",
  }
});

const poMySql = mysql.createConnection({
  host:"bcu7dec8g3m6znztqiqu-mysql.services.clever-cloud.com",
  user:"u6gwwoia69uksvut",
  password:"BMOTPoOfuLoCZaJebF41",
  database:"bcu7dec8g3m6znztqiqu",
})

const middle = express.urlencoded({
  extended: false,
  limit: 10000,
  parameterLimit: 2,
})

const totalVentas = 2
// SUBIR FILE Y LEERLO
const createFile = async (req, res) => {
  let valor = (req.file.buffer)
  const excel = XLSX.read(valor);
  const nombreHoja = excel.SheetNames;
  const datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
  // pasar el date del excel a que este en formato para pasarlo a base de datos
  datos.map(e => {
    let excelSerialDate = e.fecha_venta
    let info = new Date(Date.UTC(0, 0, excelSerialDate));
  })

  // const clientes = 
  // datos.map(e => 
  //   {
  //   return { 
  //   nombre: e.nombre,
  //   apellido: e.apellido,
  //   correo_electronico: e.correo_electronico 
  // }
  // })

  // await pool.batchInsert('Clientes',clientes, 50)

  // const productos = 
  // datos.map(e => {
  //   return {
  //     codigo_barras: e.codigo_barras ,
  //     nombre_producto: e.nombre_producto ,
  //     descripcion: e.descripcion,
  //     categoria: e.categoria,
  //     precio: e.precio
  //   }
  // })
  
  // await pool.batchInsert('Productos',productos, 50)

  const ventas = 
  datos.map(e => {
    // pasar de excel a venta
    let excelSerialDate = e.fecha_venta
    let info = new Date(Date.UTC(0, 0, excelSerialDate));
    return {
      fecha_venta: info,
      id_cliente: e.nombre + e.apellido ,
      id_producto: e.nombre_producto,
      cantidad: e.cantidad,
      total_venta:e.total_venta
    }
  })
  
  await pool.batchInsert('Ventas',ventas, 50)


   
}




// obtener el total de ventas
const getTotalVentas = (req, res) => {
  const response = "SELECT SUM(total_venta) as suma from Ventas";
  poMySql.query(response, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};

const getTotalUnidades = (req, res) => {
  const response = "SELECT SUM(cantidad) as suma from Ventas";
  poMySql.query(response, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};


const getMarcas = (req,res) => {
    const response = "SELECT fecha_venta,total_venta from Ventas ";
  poMySql.query(response, (err, data) => {
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
  getTotalUnidades,
  getMarcas
};




