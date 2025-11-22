var express = require("express");
var router = express.Router();

var glicemiaController = require("../controllers/glicemiaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/registrar", function (req, res) {
    glicemiaController.registrar(req, res);
})
router.get("/ultimas/:dia/:idUsuario", function(req,res) {
    glicemiaController.buscarUltimas(req, res);
})
router.get("/tempo-real/:dia/:idUsuario", function (req,res) {
    glicemiaController.buscarTempoReal(req, res);
})

module.exports = router;