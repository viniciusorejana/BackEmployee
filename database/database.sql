DROP DATABASE teste_db;

CREATE DATABASE teste_db;

USE teste_db;

CREATE TABLE employee(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200),
    cpf INTEGER(12) UNIQUE,
    salary INTEGER DEFAULT 0,
    bonus INTEGER DEFAULT 0
);

ALTER TABLE employee MODIFY name varchar(150) NOT NULL;
ALTER TABLE employee MODIFY cpf varchar(11) NOT NULL;

DESCRIBE employee;