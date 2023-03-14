import { getAllCategories, createCategory, updateCategory } from '../controllers/categories.controller';
import express from 'express'
import validate from '../middleware/validate'
import { createCategorySchema, updateCategorySchema } from '../schema.zod/categories.zod';
import auth from '../middleware/auth'
let router = express.Router()

// read
router.get('/', auth, getAllCategories);

// create 
router.post('/', auth, validate(createCategorySchema), createCategory);

// update
router.put('/updateCategory/:id', auth, validate(updateCategorySchema), updateCategory);

export default router;