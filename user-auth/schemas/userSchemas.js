const { z } = require('zod/v4');

const registerSchema = z.object({
  fName: z.string().min(1),
  lName: z.string().min(1),
  email: z.email(),
  password: z.string().min(6)
});

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6)
})

const updateUserSchema = z.object({
  fName: z.string().optional(),
  lName: z.string().optional(),
  email: z.string().optional(),
})

module.exports = {
  registerSchema,
  loginSchema,
  updateUserSchema
};