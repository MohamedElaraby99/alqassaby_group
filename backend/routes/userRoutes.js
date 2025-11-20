const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const { protect, restrictTo } = require('../middleware/auth');
const validate = require('../middleware/validate');

// Validation rules
const createUserValidation = [
  body('name').trim().notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
  body('email').isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role').optional().isIn(['admin', 'editor', 'user']).withMessage('Invalid role'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean')
];

const updateUserValidation = [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
  body('email').optional().isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('role').optional().isIn(['admin', 'editor', 'user']).withMessage('Invalid role'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean'),
  body('avatar').optional().isString()
];

const updateMeValidation = [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
  body('avatar').optional().isString()
];

// All routes require authentication
router.use(protect);

// GET /api/users/me - Get own profile
router.get('/me', (req, res, next) => {
  req.params.id = req.user.id;
  next();
}, userController.getUserById);

// PUT /api/users/me - Update own profile
router.put('/me', updateMeValidation, validate, userController.updateMe);

// All routes below require admin role
router.use(restrictTo('admin'));

// GET /api/users - Get all users
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Get user by ID
router.get('/:id', userController.getUserById);

// POST /api/users - Create new user
router.post('/', createUserValidation, validate, userController.createUser);

// PUT /api/users/:id - Update user
router.put('/:id', updateUserValidation, validate, userController.updateUser);

// PATCH /api/users/:id/active - Toggle user active status
router.patch('/:id/active', userController.toggleActive);

// DELETE /api/users/:id - Delete user
router.delete('/:id', userController.deleteUser);

module.exports = router;

