const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact/submit
exports.submitContact = async (req, res, next) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !subject || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'All fields are required'
      });
    }

    // Create new contact submission
    const contact = await Contact.create({
      name,
      phone,
      email,
      subject,
      message,
      read: false,
      replied: false
    });

    res.status(201).json({
      status: 'success',
      message: 'Contact form submitted successfully. We will get back to you soon!',
      data: contact
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        status: 'error',
        message: Object.values(error.errors).map(e => e.message).join(', ')
      });
    }
    next(error);
  }
};

// @desc    Get all contact submissions
// @route   GET /api/contact/submissions
exports.getAllSubmissions = async (req, res, next) => {
  try {
    const { read, replied, limit = 50, page = 1, search } = req.query;

    // Build query
    const query = {};
    if (read !== undefined) {
      query.read = read === 'true';
    }
    if (replied !== undefined) {
      query.replied = replied === 'true';
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get contacts with pagination
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(skip);

    // Get total count
    const total = await Contact.countDocuments(query);

    res.status(200).json({
      status: 'success',
      results: contacts.length,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      data: contacts
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get contact submission by ID
// @route   GET /api/contact/:id
exports.getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: contact
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }
    next(error);
  }
};

// @desc    Mark contact as read
// @route   PATCH /api/contact/:id/read
exports.markAsRead = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }

    contact.read = true;
    await contact.save();

    res.status(200).json({
      status: 'success',
      message: 'Contact marked as read',
      data: contact
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }
    next(error);
  }
};

// @desc    Mark contact as replied
// @route   PATCH /api/contact/:id/replied
exports.markAsReplied = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }

    contact.replied = true;
    contact.read = true; // Also mark as read when replied
    await contact.save();

    res.status(200).json({
      status: 'success',
      message: 'Contact marked as replied',
      data: contact
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }
    next(error);
  }
};

// @desc    Delete contact submission
// @route   DELETE /api/contact/:id
exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Contact submission deleted successfully'
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }
    next(error);
  }
};

// @desc    Get contact statistics
// @route   GET /api/contact/stats
exports.getStats = async (req, res, next) => {
  try {
    const total = await Contact.countDocuments();
    const read = await Contact.countDocuments({ read: true });
    const unread = await Contact.countDocuments({ read: false });
    const replied = await Contact.countDocuments({ replied: true });
    const unreplied = await Contact.countDocuments({ replied: false });

    res.status(200).json({
      status: 'success',
      data: {
        total,
        read,
        unread,
        replied,
        unreplied
      }
    });
  } catch (error) {
    next(error);
  }
};

