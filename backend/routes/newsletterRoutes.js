const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const newsletterController = require('../controllers/newsletterController');
const validate = require('../middleware/validate');

// Validation rules for subscription
const subscribeValidation = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
];

// Routes
// POST subscribe to newsletter (public)
router.post('/subscribe', subscribeValidation, validate, newsletterController.subscribe);

// GET all subscribers (protected - should add auth middleware)
router.get('/subscribers', newsletterController.getAllSubscribers);

// GET subscription statistics
router.get('/stats', newsletterController.getStats);

// PATCH unsubscribe
router.patch('/unsubscribe/:id', newsletterController.unsubscribe);

// DELETE subscriber
router.delete('/:id', newsletterController.deleteSubscriber);

module.exports = router;

