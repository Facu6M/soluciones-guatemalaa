const { config } = require("dotenv")
const mysql = require("mysql")

const pool = mysql.createConnection({
    host:"bcu7dec8g3m6znztqiqu-mysql.services.clever-cloud.com",
    user:"u6gwwoia69uksvut",
    password:"BMOTPoOfuLoCZaJebF41",
    database:"bcu7dec8g3m6znztqiqu",
 })


setInterval(function () {
  pool.query('SELECT * FROM Clientes');
}, 200);

const getAllClientes = (req,res) => {
  // const values = req.body;
  console.log("hola")
};


module.exports = {
  getAllClientes,
};
