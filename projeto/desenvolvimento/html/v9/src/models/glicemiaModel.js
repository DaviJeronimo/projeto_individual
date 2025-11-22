var database = require("../database/config")

function registrar(valor, horario, dia, fkUsuarioglicemia) {
    console.log("ACESSEI O GLICEMIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar(): ", valor, horario, dia, fkUsuarioglicemia)
    var instrucaoSql = `
       INSERT INTO glicemia (valor, horario, diadaSemana, fkUsuarioglicemia) VALUES
       ('${valor}', '${horario}', '${dia}', ''${fkUsuarioglicemia});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function buscarPorDia(dia, fkUsuario) {
    console.log("ACESSEI O GLICEMIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPorDia():", dia, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT idglicemia, valor, horario, diadaSemana
        FROM glicemia WHERE diadaSemana = '${dia}' AND fkUsuarioglicemia = ${fkUsuario}
        ORDER BY horario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    buscarPorDia
};