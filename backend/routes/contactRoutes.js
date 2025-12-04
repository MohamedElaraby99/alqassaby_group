const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const contactController = require('../controllers/contactController');
const validate = require('../middleware/validate');

// Validation rules for contact form
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
];

// Routes
// POST submit contact form (public)
router.post('/submit', contactValidation, validate, contactController.submitContact);

// GET all contact submissions (protected - should add auth middleware)
router.get('/submissions', contactController.getAllSubmissions);

// GET contact statistics
router.get('/stats', contactController.getStats);

// GET contact by ID
router.get('/:id', contactController.getContactById);

// PATCH mark as read
router.patch('/:id/read', contactController.markAsRead);

// PATCH mark as replied
router.patch('/:id/replied', contactController.markAsReplied);

// DELETE contact submission
router.delete('/:id', contactController.deleteContact);

module.exports = router;

