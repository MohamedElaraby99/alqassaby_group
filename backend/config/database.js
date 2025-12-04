const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('❌ Error: MONGODB_URI is not defined in .env file');
      console.error('   Please create a .env file in the backend directory with:');
      console.error('   MONGODB_URI=mongodb://localhost:27017/elkassaby-group');
      process.exit(1);
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;


