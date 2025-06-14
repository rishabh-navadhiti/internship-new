import express from 'express';
import employeeRoutes from './routes/employeeRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/employees', employeeRoutes);

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
}).catch((err) => {
  console.log('Mongodb connection error');  
});

