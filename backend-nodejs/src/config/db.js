// Configuración de la ticketsDB.
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Creamos la conección a la DB
export const connection = await mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER ||  "root",
  password: process.env.DB_PASSWORD || "" ,
  database: process.env.DB_NAME || "ticketsdb",
  port: process.env.DB_PORT || 3306,
});


