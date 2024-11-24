const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,  // Ensures that the new MongoDB driver is used
      // Remove the deprecated options below:
      // useCreateIndex: true, // REMOVE this line
      // useFindAndModify: false // REMOVE this line
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
