import 'dotenv/config'
import express from 'express'
import { db } from './src/database/connection.js'
import { Product } from './src/models/Product.js'
import { router } from './src/routes/products.routes.js'

export const app = express()

const PORT = process.env.PORT || 3011

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


//middlewares
app.use(express.json())

//static folder
app.use('/public/images', express.static('./public/images'))

app.set('views', './src/views') 
app.set('view engine', 'ejs');

app.use(router)

export const dbConnection = async (db) => {
    try {
    await db.sync({force: false}) 
       console.log('Connection has been established successfully')
    } catch (error) {
        console.error('Unable to connect to the database')
    }
}

dbConnection(db)
console.log(Product === db.models.products)
