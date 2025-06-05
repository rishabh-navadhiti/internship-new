const express = require('express');
const router = express.Router();
const { registerSchema, loginSchema, updateUserSchema } = require('../schemas/userSchemas');
const { hashPassword, comparePassword } = require('../helpers/hash');
const { createUser, getAllUsers, updateUser, deleteUser } = require('../helpers/userOperation');
const validate = require('../middleware/validateMiddleware');
const auth = require('../middleware/authMiddleware');
const makeId = require('../helpers/idGenerator');
const jwt = require('jsonwebtoken');
const displayExpiry = require('../helpers/displayExpiry');

router.post('/register', validate(registerSchema), async (req, res) => {
  const { fName, lName, email, password } = req.body;
  const usersResp = await getAllUsers();
  const users = usersResp.data.documents || [];
  const exists = users.find(doc => doc.fields?.email?.stringValue === email);
  if (exists) 
    return res.status(409).json({ error: 'Email already registered' });
  

  const hashedPassword = await hashPassword(password);
  const newUser = await createUser({ fName, lName, email, password: hashedPassword });
  const userId = newUser.data.name.split('/').pop();
  res.status(201).json({ message: 'User registered successfully', userId });

})



router.post('/login', validate(loginSchema), async (req, res) => {
  const { email, password } = req.body;
  const usersResp = await getAllUsers();
  const users = usersResp.data.documents || [];
  const entry = users.find(doc => doc.fields?.email?.stringValue === email);
  if (!entry)
    return res.status(401).json({ error: 'Invalid Email' });

  const user = entry.fields;
  if (!user.isActive.booleanValue) 
    return res.status(403).json({ error: 'User is inactive' });

  
  const valid = await comparePassword(password, user.password.stringValue);
  if (!valid) 
    return res.status(401).json({ error: 'Invalid Password' });

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.json({ token , expiry: displayExpiry( '2h') });
});

router.put('/user/update/:id', auth, validate(updateUserSchema), async (req, res) => {
  console.log(req.params.id, req.body);
  
  await updateUser(req.params.id, req.body);
  res.json({ message: 'User updated' });
});



router.patch('/user/inactive/:id', auth, async (req, res) => {
  await updateUser(req.params.id, { isActive: false });
  res.json({ message: 'User marked inactive' });
});

router.delete('/user/delete/:id', auth, async (req, res) => {
  await deleteUser(req.params.id);
  res.json({ message: 'User deleted' });
});


module.exports = router;