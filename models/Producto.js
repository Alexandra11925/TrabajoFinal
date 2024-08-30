const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')
const Categoria = require('./Categoria')

const Producto = sequelize.define('Producto', {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Categoria',
            key: 'id_categoria'
        }
    }
},
    {
        tableName: 'productos',
        timestamps: false
    }
)
Producto.belongsTo(Categoria, {foreignKey: 'id_categoria', as: 'Categoria'})
module.exports = Producto