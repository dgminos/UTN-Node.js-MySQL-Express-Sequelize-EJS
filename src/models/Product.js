import { DataTypes } from 'sequelize'
import { db } from '../database/connection.js'

export const Product = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
    },
    priceInARS: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    variety: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 
    weightInGrams: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tastingNote: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    packagesAvailable: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    })

