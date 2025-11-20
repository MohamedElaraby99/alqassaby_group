const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');

// Validation rules
const registerValidation = [
  body('name').trim().notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
  body('email').isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role').optional().isIn(['admin', 'editor', 'user']).withMessage('Invalid role')
];

const loginValidation = [
  body('email').isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required')
];

const updatePasswordValidation = [
  body('currentPassword').notEmpty().withMessage('Current password is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters')
];

// Routes
// POST /api/auth/register - Register new user
router.post('/register', registerValidation, validate, authController.register);

// POST /api/auth/login - Login user
router.post('/login', loginValidation, validate, authController.login);

// GET /api/auth/me - Get current user (protected)
router.get('/me', protect, authController.getMe);

// PUT /api/auth/update-password - Update password (protected)
router.put('/update-password', protect, updatePasswordValidation, validate, authController.updatePassword);

// POST /api/auth/logout - Logout (protected)
router.post('/logout', protect, authController.logout);

module.exports = router;

