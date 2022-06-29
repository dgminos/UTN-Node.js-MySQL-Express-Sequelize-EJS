import { Router } from 'express'
import { getProducts, createProduct, updateProduct, deleteProduct, getProduct } from '../controllers/products.controller.js'
import { upload } from '../helpers/multer.js'

export const router = Router()

router.get('/', getProducts)
router.post('/', upload, createProduct)
router.put('/:id', upload, updateProduct)
router.delete('/:id', deleteProduct)
router.get('/:id', getProduct)
