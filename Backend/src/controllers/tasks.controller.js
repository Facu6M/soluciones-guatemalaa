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

const createFile = (req,res) => {
  let valor = (req.file.buffer)
  const excel = XLSX.read(valor);
  const nombreHoja = excel.SheetNames;
  const datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
  datos.map(e => {
    console.log(e.nombre)
  })
};





module.exports = {
  createFile,
};
