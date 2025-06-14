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

router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
    if (!employee) res.status(404).json({error: 'Not found'});
    res.status(200).json(employee);
  } catch (err: any) {
    res.status(500).json({error: 'Failed to get individual employee from DB', message: err.message});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!updated) res.status(404).json({ error: 'Not found' });
    res.json(updated);
  }  catch(err: any) {
    res.status(400).json({ error: 'Could not update the id', message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);
    if (!deleted) res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});


export default router;