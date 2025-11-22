var express = require("express");
var router = express.Router();

var glicemiaController = require("../controllers/glicemiaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/registrar", function (req, res) {
    glicemiaController.cadastrar(req, res);
})

module.exports = router;