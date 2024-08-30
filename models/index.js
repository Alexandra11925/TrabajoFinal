// const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Usar el archivo database.js para la configuración

const Categoria = require('./Categoria');
const Producto = require('./Producto');

// Importar asociaciones
require('./associations');

// Exportar los modelos y la conexión sequelize
module.exports = {
  Categoria,
  Producto,
  sequelize
};
