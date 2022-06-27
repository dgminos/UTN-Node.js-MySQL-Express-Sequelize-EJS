import { Router } from 'express'
import { getProducts } from '../controllers/products.controller.js'

export const router = Router()

router.get('/',  async (req, res) => {
    const products = await getProducts()
    res.render('products', {products})
    //res.json(products)
})
