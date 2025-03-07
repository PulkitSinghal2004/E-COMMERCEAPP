import express from 'express';
import { getAllCategories } from '../controller/category.js';

const router = express.Router()

router.get('/',getAllCategories)

export default router