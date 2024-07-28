import mongoose from 'mongoose';

const dbUri = 'mongodb://127.0.0.1:27017/robots';

mongoose.connect(dbUri,{serverSelectionTimeoutMS: 5000}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected and open');
});
