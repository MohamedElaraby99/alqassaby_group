const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const productController = require('../controllers/productController');
const validate = require('../middleware/validate');
const upload = require('../middleware/upload');

// Middleware to parse JSON strings in specifications field
const parseSpecifications = (req, res, next) => {
  if (req.body.specifications) {
    // If specifications is a string (JSON), parse it
    if (typeof req.body.specifications === 'string') {
      try {
        const parsed = JSON.parse(req.body.specifications);
        // Only replace if it's a valid object and not empty
        if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
          if (Object.keys(parsed).length > 0) {
            req.body.specifications = parsed;
          } else {
            // Remove empty specifications
            delete req.body.specifications;
          }
        } else {
          delete req.body.specifications;
        }
      } catch (e) {
        // If parsing fails, remove it (invalid JSON)
        delete req.body.specifications;
      }
    } else if (typeof req.body.specifications === 'object' && req.body.specifications !== null) {
      // If it's already an object but empty, remove it
      if (Object.keys(req.body.specifications).length === 0) {
        delete req.body.specifications;
      }
    }
  }
  next();
};

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

// POST create new product (with optional file upload)
router.post('/', upload.single('image'), parseSpecifications, productValidation, validate, productController.createProduct);

// PUT update product (with optional file upload)
router.put('/:id', upload.single('image'), parseSpecifications, productValidation, validate, productController.updateProduct);

// PATCH toggle featured status
router.patch('/:id/featured', productController.toggleFeatured);

// DELETE product
router.delete('/:id', productController.deleteProduct);

module.exports = router;




