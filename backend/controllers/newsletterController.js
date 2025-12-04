const Newsletter = require('../models/Newsletter');

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter/subscribe
exports.subscribe = async (req, res, next) => {
  try {
    const { email, phone } = req.body;

    // Validate required fields
    if (!email || !phone) {
      return res.status(400).json({
        status: 'error',
        message: 'Email and phone number are required'
      });
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      // Update existing subscriber
      existingSubscriber.phone = phone;
      existingSubscriber.subscribed = true;
      existingSubscriber.subscriptionDate = new Date();
      await existingSubscriber.save();

      return res.status(200).json({
        status: 'success',
        message: 'Subscription updated successfully',
        data: existingSubscriber
      });
    }

    // Create new subscription
    const subscriber = await Newsletter.create({
      email,
      phone,
      subscribed: true
    });

    res.status(201).json({
      status: 'success',
      message: 'Successfully subscribed to newsletter',
      data: subscriber
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        status: 'error',
        message: 'Email already subscribed'
      });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        status: 'error',
        message: Object.values(error.errors).map(e => e.message).join(', ')
      });
    }
    next(error);
  }
};

// @desc    Get all newsletter subscribers
// @route   GET /api/newsletter/subscribers
exports.getAllSubscribers = async (req, res, next) => {
  try {
    const { subscribed, limit = 50, page = 1, search } = req.query;

    // Build query
    const query = {};
    if (subscribed !== undefined) {
      query.subscribed = subscribed === 'true';
    }
    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get subscribers with pagination
    const subscribers = await Newsletter.find(query)
      .sort({ subscriptionDate: -1 })
      .limit(parseInt(limit))
      .skip(skip);

    // Get total count
    const total = await Newsletter.countDocuments(query);

    res.status(200).json({
      status: 'success',
      results: subscribers.length,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      data: subscribers
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Unsubscribe from newsletter
// @route   PATCH /api/newsletter/unsubscribe/:id
exports.unsubscribe = async (req, res, next) => {
  try {
    const subscriber = await Newsletter.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        status: 'error',
        message: 'Subscriber not found'
      });
    }

    subscriber.subscribed = false;
    await subscriber.save();

    res.status(200).json({
      status: 'success',
      message: 'Successfully unsubscribed',
      data: subscriber
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Subscriber not found'
      });
    }
    next(error);
  }
};

// @desc    Delete subscriber
// @route   DELETE /api/newsletter/:id
exports.deleteSubscriber = async (req, res, next) => {
  try {
    const subscriber = await Newsletter.findByIdAndDelete(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        status: 'error',
        message: 'Subscriber not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Subscriber deleted successfully'
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Subscriber not found'
      });
    }
    next(error);
  }
};

// @desc    Get subscription statistics
// @route   GET /api/newsletter/stats
exports.getStats = async (req, res, next) => {
  try {
    const total = await Newsletter.countDocuments();
    const subscribed = await Newsletter.countDocuments({ subscribed: true });
    const unsubscribed = await Newsletter.countDocuments({ subscribed: false });

    res.status(200).json({
      status: 'success',
      data: {
        total,
        subscribed,
        unsubscribed
      }
    });
  } catch (error) {
    next(error);
  }
};

