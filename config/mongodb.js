import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('DB Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });

  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'e-commerce',            
    serverSelectionTimeoutMS: 10000,
  });

  console.log('Mongoose readyState:', mongoose.connection.readyState);
};

export default connectDB;
