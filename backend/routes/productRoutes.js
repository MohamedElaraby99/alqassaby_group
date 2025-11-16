const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const productController = require('../controllers/productController');
const validate = require('../middleware/validate');

// Validation rules
const productValidation = [
  body('name').trim().notEmpty().withMessage('Product name is required')
    .isLength({ max: 200 }).withMessage('Product name cannot exceed 200 characters'),
  body('description').trim().notEmpty().withMessage('Product description is required'),
  body('price').isNumeric().withMessage('Price must be a number')
    .custom(value => value >= 0).withMessage('Price cannot be negative'),
  body('category').trim().notEmpty().withMessage('Product category is required'),
  body('image').optional().isString(),
  body('featured').optional().isBoolean().withMessage('Featured must be a boolean'),
  body('inStock').optional().isBoolean().withMessage('InStock must be a boolean'),
  body('tags').optional().isArray().withMessage('Tags must be an array'),
  body('specifications').optional().isObject().withMessage('Specifications must be an object')
];

// Routes
// GET all products (with optional filters)
router.get('/', productController.getAllProducts);

// GET featured products only
router.get('/featured', productController.getFeaturedProducts);

// GET product by ID
router.get('/:id', productController.getProductById);

// POST create new product
router.post('/', productValidation, validate, productController.createProduct);

// PUT update product
router.put('/:id', productValidation, validate, productController.updateProduct);

// PATCH toggle featured status
router.patch('/:id/featured', productController.toggleFeatured);

// DELETE product
router.delete('/:id', productController.deleteProduct);

module.exports = router;

