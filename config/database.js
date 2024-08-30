const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('inventario_producto', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports = sequelize