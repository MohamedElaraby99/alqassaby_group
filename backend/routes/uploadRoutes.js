const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const path = require('path');

// Single file upload route
router.post('/image', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 'error',
        message: 'No file uploaded'
      });
    }

    // Return the file path relative to the uploads directory
    const fileUrl = `/uploads/${req.file.filename}`;

    res.status(200).json({
      status: 'success',
      message: 'File uploaded successfully',
      data: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        url: fileUrl,
        size: req.file.size,
        mimetype: req.file.mimetype
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error uploading file'
    });
  }
});

// Multiple files upload route (for future use)
router.post('/images', upload.array('images', 10), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'No files uploaded'
      });
    }

    const files = req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      url: `/uploads/${file.filename}`,
      size: file.size,
      mimetype: file.mimetype
    }));

    res.status(200).json({
      status: 'success',
      message: 'Files uploaded successfully',
      data: files
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error uploading files'
    });
  }
});

module.exports = router;

