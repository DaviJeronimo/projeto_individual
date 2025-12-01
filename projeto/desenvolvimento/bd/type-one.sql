CREATE DATABASE typeone;

USE typeone;

CREATE TABLE usuarios (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	senha VARCHAR(50) NOT NULL
);
-- select individual da tabela usuários
SELECT * FROM usuarios;

CREATE TABLE glicemia (
	idglicemia INT PRIMARY KEY AUTO_INCREMENT,
	valor INT NOT NULL,
	horario TIME NOT NULL,
	diadaSemana VARCHAR(15) NOT NULL,
	fkUsuarioglicemia INT,
	FOREIGN KEY (fkUsuarioglicemia) REFERENCES usuarios(idUsuario)
);

-- select individual da tabela glicemias
SELECT * FROM glicemia;

-- select para contar a quantidade de glicemias cadastradas.
SELECT COUNT(idglicemia) FROM glicemia;

-- select para trazer os usuários e suas respectivas glicemias.
SELECT s.nome AS 'Nome do usuário',
s.email AS 'E-mail do usuário',
g.valor AS 'Valor glicêmico registrado',
g.horario AS 'Horário do registro',
g.diadaSemana AS 'Dia do registro'
FROM usuarios s JOIN glicemia g ON s.idUsuario = g.fkUsuarioglicemia;

-- view para manter este select "salvo" no banco.
CREATE VIEW usuario_glicemia AS SELECT
s.nome AS 'Nome do usuário',
s.email AS 'E-mail do usuário',
g.valor AS 'Valor glicêmico registrado',
g.horario AS 'Horário do registro',
g.diadaSemana AS 'Dia do registro'
FROM usuarios s JOIN glicemia g ON s.idUsuario = g.fkUsuarioglicemia
WHERE g.valor > 200;

-- select com os dados da view.
SELECT * FROM usuario_glicemia;