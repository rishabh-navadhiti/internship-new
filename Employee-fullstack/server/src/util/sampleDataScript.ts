import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import Employee, { IEmployee } from '../models/Employee';

dotenv.config();

const dataPath = path.join(__dirname, 'sampleData.json');

async function addSampleData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB connected');

    const rawData = fs.readFileSync(dataPath, 'utf-8');
    const employees = JSON.parse(rawData);

    // clear existing data
    // await Employee.deleteMany({});
    // console.log('Cleared existing employee data');

    // insert into th databse
    await Employee.insertMany(employees);
    console.log('Sample employee data inserted');

    mongoose.disconnect();
  } catch (err) {
    console.error('Error importing/adding data:', err);
    process.exit(1);
  }
}

addSampleData();
