import { Product } from '../models/Product.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        //res.json(products)  
        return products  
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}


