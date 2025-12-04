const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/database');

// Connect to database
connectDB();

const createAdmin = async () => {
  try {
    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@elkassaby.com' });
    
    if (adminExists) {
      console.log('Admin user already exists!');
      process.exit(0);
    }

    // Create admin user
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@elkassaby.com',
      password: 'admin123', // Change this in production!
      role: 'admin',
      isActive: true
    });

    console.log('✅ Admin user created successfully!');
    console.log('Email: admin@elkassaby.com');
    console.log('Password: admin123');
    console.log('⚠️  Please change the password after first login!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createAdmin();

