const { z, email } = require('zod');

const emailSchema = z.string({ required_error: 'Email is required' }).email('Invalid email format')

const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: emailSchema,
  password: z
  .string({ required_error: 'Password is required' })
  .min(6, 'Password must be at least 6 characters'),
})

const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required')
})

module.exports = ({ loginSchema, registerSchema })