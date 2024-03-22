require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DDB } = process.env;
const bookModel = require("../models/Book");

const baseDeDatos = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DDB}`,
   { logging: false, native: false }
);

bookModel(baseDeDatos);

const { Book } = baseDeDatos.models;

module.exports = {
   Book,
   conn: baseDeDatos,
};