const Blog = require('../models/Blog');

// @desc    Get all blogs with optional filters
// @route   GET /api/blogs
// @query   ?featured=true&category=news&published=true&limit=10&page=1
exports.getAllBlogs = async (req, res, next) => {
  try {
    const { featured, category, published, limit = 10, page = 1 } = req.query;
    
    // Build query
    const query = {};
    if (featured !== undefined) query.featured = featured === 'true';
    if (category) query.category = category;
    if (published !== undefined) query.published = published === 'true';

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get blogs with pagination
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(skip);

    // Get total count
    const total = await Blog.countDocuments(query);

    res.status(200).json({
      status: 'success',
      results: blogs.length,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      data: blogs
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured blogs
// @route   GET /api/blogs/featured
exports.getFeaturedBlogs = async (req, res, next) => {
  try {
    const { limit = 10 } = req.query;

    const blogs = await Blog.find({ featured: true, published: true })
      .sort({ createdAt: -1 })
      .limit(parseInt(limit));

    res.status(200).json({
      status: 'success',
      results: blogs.length,
      data: blogs
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get blog by slug
// @route   GET /api/blogs/slug/:slug
exports.getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get blog by ID
// @route   GET /api/blogs/:id
exports.getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: blog
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }
    next(error);
  }
};

// @desc    Create new blog
// @route   POST /api/blogs
exports.createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json({
      status: 'success',
      message: 'Blog created successfully',
      data: blog
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        status: 'error',
        message: 'Blog with this slug already exists'
      });
    }
    next(error);
  }
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!blog) {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Blog updated successfully',
      data: blog
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }
    if (error.code === 11000) {
      return res.status(400).json({
        status: 'error',
        message: 'Blog with this slug already exists'
      });
    }
    next(error);
  }
};

// @desc    Toggle featured status
// @route   PATCH /api/blogs/:id/featured
exports.toggleFeatured = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }

    blog.featured = !blog.featured;
    await blog.save();

    res.status(200).json({
      status: 'success',
      message: `Blog ${blog.featured ? 'featured' : 'unfeatured'} successfully`,
      data: blog
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }
    next(error);
  }
};

// @desc    Increment blog views
// @route   PATCH /api/blogs/:id/views
exports.incrementViews = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: { views: blog.views }
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }
    next(error);
  }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        status: 'error',
        message: 'Blog not found'
      });
    }
    next(error);
  }
};



