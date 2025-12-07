var glicemiaModel = require("../models/glicemiaModel");


function registrar(req, res) {
    var valor = req.body.valorServer;
    var dia = req.body.diaServer;
    var horario = req.body.horarioServer;
    var fkUsuarioglicemia = req.body.usuarioServer;

    if (valor == undefined) {
        res.status(400).send("O valor da glicemia está undefined!");
    } else if (dia == undefined) {
        res.status(400).send("O dia está undefined!");
    }
    else if (horario == undefined) {
        res.status(400).send("O horário está undefined!");
    } 
    else if (fkUsuarioglicemia == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } 
    else {
            glicemiaModel.registrar(valor, horario, dia, fkUsuarioglicemia).then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao registrar a glicemia! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function buscarPorDia(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var dia = req.params.dia;
    var fkUsuario = req.params.idUsuario;
    

    // Faça as validações dos valores
    if (dia == undefined) {
        res.status(400).send("o dia da busca está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        glicemiaModel.buscarPorDia(dia, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar os dados de glicemia! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarTempoReal(req, res) {
    var dia = req.params.dia;
    var idUsuario = req.params.idUsuario;

    glicemiaModel.buscarTempoReal(dia, idUsuario)

    .then(function (resultado) {
        res.status(200).json(resultado);
    })

    .catch(function (erro) {
        console.log("Houve um erro ao buscar dados em tempo real",erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    
});
}

function buscarFaixas(req, res) {
    var dia = req.params.dia;
    var idUsuario = req.params.idUsuario;

    glicemiaModel.buscarFaixas(dia,idUsuario)

    .then(function (resultado) {
        res.status(200).json(resultado);
    })
    .catch(function(erro) {
    console.log(erro);
    res.status(500).json(erro);
    });
}

module.exports = {
    registrar,
    buscarPorDia,
    buscarTempoReal,
    buscarFaixas
}