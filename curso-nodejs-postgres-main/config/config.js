//AQUI VAMOS A TENER UNA CONFIGURACION BASICA PARA LEER LAS VARIABLES DE ENTORNO
require("dotenv").config();

const config = {
    env: process.env.NODE_ENV || 'dev', //en node leemos variables de entorno con .process, que es una instancia que va implicita en node
    port: process.env.PORT || 3000,
    dbUser:  process.env.DB_USER,
    dbPassword:  process.env.DB_PASSWORD,
    dbHost:  process.env.DB_HOST,
    dbName:  process.env.DB_NAME,
    dbPort:  process.env.DB_PORT,
}

module.exports = {config}


