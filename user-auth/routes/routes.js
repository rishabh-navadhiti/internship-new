const express = require('express');
const router = express.Router();
const { registerSchema, loginSchema, updateUserSchema } = require('../schemas/userSchemas');
const { hashPassword, comparePassword } = require('../helpers/hash');
const { createUser, getAllUsers, updateUser, deleteUser } = require('../helpers/userOperation');
const validate = require('../middleware/validateMiddleware');
const auth = require('../middleware/authMiddleware');
const makeId = require('../helpers/idGenerator');
const jwt = require('jsonwebtoken');

router.post('/register', validate(registerSchema), async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const usersResp = await getAllUsers();
  const users = usersResp.data.documents || [];
  const exists = users.find(doc => doc.fields?.email?.stringValue === email);
  if (exists) return res.status(409).json({ error: 'Email already registered' });

  const hashedPassword = await hashPassword(password);
  await createUser(uuidv4(), { firstName, lastName, email, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });

})