import mongoose from "mongoose";

mongoose.connect('mongodb://root:password@mongodb:27017/LinkManager?authSource=admin');
//mongoose.connect('mongodb://localhost:27017/LinkManager');
const db = mongoose.connection ;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db; 