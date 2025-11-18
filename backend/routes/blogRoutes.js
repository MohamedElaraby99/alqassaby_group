const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const blogController = require('../controllers/blogController');
const validate = require('../middleware/validate');
const upload = require('../middleware/upload');

// Validation rules
const blogValidation = [
  body('title').trim().notEmpty().withMessage('Blog title is required')
    .isLength({ max: 200 }).withMessage('Blog title cannot exceed 200 characters'),
  body('slug').trim().notEmpty().withMessage('Blog slug is required')
    .toLowerCase().matches(/^[a-z0-9-]+$/).withMessage('Slug must contain only lowercase letters, numbers, and hyphens'),
  body('content').trim().notEmpty().withMessage('Blog content is required'),
  body('excerpt').trim().notEmpty().withMessage('Blog excerpt is required')
    .isLength({ max: 500 }).withMessage('Excerpt cannot exceed 500 characters'),
  body('author').trim().notEmpty().withMessage('Author name is required'),
  body('image').optional().isString(),
  body('featured').optional().isBoolean().withMessage('Featured must be a boolean'),
  body('published').optional().isBoolean().withMessage('Published must be a boolean'),
  body('category').trim().notEmpty().withMessage('Blog category is required'),
  body('tags').optional().isArray().withMessage('Tags must be an array')
];

// Routes
// GET all blogs (with optional filters)
router.get('/', blogController.getAllBlogs);

// GET featured blogs only
router.get('/featured', blogController.getFeaturedBlogs);

// GET blog by slug
router.get('/slug/:slug', blogController.getBlogBySlug);

// GET blog by ID
router.get('/:id', blogController.getBlogById);

// POST create new blog (with optional file upload)
router.post('/', upload.single('image'), blogValidation, validate, blogController.createBlog);

// PUT update blog (with optional file upload)
router.put('/:id', upload.single('image'), blogValidation, validate, blogController.updateBlog);

// PATCH toggle featured status
router.patch('/:id/featured', blogController.toggleFeatured);

// PATCH increment views
router.patch('/:id/views', blogController.incrementViews);

// DELETE blog
router.delete('/:id', blogController.deleteBlog);

module.exports = router;




