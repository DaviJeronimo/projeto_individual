-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE typeone;

USE typeone;

CREATE TABLE usuarios (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	senha VARCHAR(50) NOT NULL
);

SELECT*FROM usuarios;

CREATE TABLE glicemia (
	idglicemia INT PRIMARY KEY AUTO_INCREMENT,
	valor INT NOT NULL,
	horario TIME NOT NULL,
	diadaSemana VARCHAR(15) NOT NULL,
	fkUsuarioglicemia INT,
	FOREIGN KEY (fkUsuarioglicemia) REFERENCES usuarios(idUsuario)
);