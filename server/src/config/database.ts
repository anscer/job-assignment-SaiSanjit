import mongoose from 'mongoose';

const dbUri = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.12';

mongoose.connect(dbUri,{serverSelectionTimeoutMS: 5000}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
