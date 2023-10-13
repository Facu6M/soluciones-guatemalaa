const { Router } = require("express");
const {
  getAllClientes
} = require("../controllers/tasks.controller");

const router = Router();


// ofertantes
router.get("/clientes", getAllClientes);




module.exports = router;
