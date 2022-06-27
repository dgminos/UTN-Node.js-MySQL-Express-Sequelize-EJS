import 'dotenv/config'
import {Sequelize} from 'sequelize' 

export const db = new Sequelize(process.env.DATABASE, process.env.DATABASEUSER, process.env.DATABASEPASSWORD, {
    host: process.env.DATABASEHOST,
    dialect: process.env.DATABASEDIALECT
})
