const { Router } = require("express");
const {
  createFile
} = require("../controllers/tasks.controller");
const multer = require("multer")
const storage = multer.memoryStorage();

const router = Router();

const configuracionMulter = multer({storage}).single("file");

// clientes
router.post("/clientes",configuracionMulter, createFile);



module.exports = router;
