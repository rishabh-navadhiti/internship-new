import { Router } from 'express';
import Employee from '../models/Employee';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
});

router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err: any) {
    res.status(500).json({error: 'Failed to get data from DB', message: err.message});
  }
});

export default router;