import { Product } from '../models/Product.js'


export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.render('products', {products})
        //res.json(products)  
        return products  
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createProduct = async (req, res) => {
    try {
        const image = req.file.path
        const { name, priceInARS, origin, variety, weightInGrams, code, tastingNote, stock, packagesAvailable } = req.body
     
        const newProduct = await Product.create({
         image,
         name,
         priceInARS,
         origin,
         variety,
         weightInGrams,
         code,
         tastingNote,
         stock,
         packagesAvailable
        })   
        
        if(name==='' || priceInARS==='') {
            return res.status(404).json({message: 'This field is required'})
        }
        res.json(newProduct)
        return newProduct
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const image  = req.file.path
       
        let productToUpdate = await Product.findByPk(id)
   
         productToUpdate.set({image})
         productToUpdate.set({...req.body})
        
        await productToUpdate.save()

        if(!productToUpdate) return res.status(404).json({message: 'Product does not exists'})
        res.json(productToUpdate)
        return productToUpdate
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        await Product.destroy({
            where: {
                id,
            }
        })
        res.sendStatus(204)  
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
       const product = await Product.findOne({
            where: {
                id,
            }
        })

        if(!product) return res.status(404).json({message: 'Product does not exists'})
        res.json(product)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}








