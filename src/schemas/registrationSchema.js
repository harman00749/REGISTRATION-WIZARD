import { z } from 'zod'

export const registrationSchema = z
  .object({
    firstName: z.string().trim().min(1, 'First name is required.'),
    lastName: z.string().trim().min(1, 'Last name is required.'),
    dateOfBirth: z.string().min(1, 'Date of birth is required.'),
    email: z
      .string()
      .trim()
      .min(1, 'Email is required.')
      .refine((value) => value.includes('@'), {
        message: 'Email must include an @ symbol.',
      }),
    password: z
      .string()
      .min(1, 'Password is required.')
      .min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(1, 'Confirm password is required.'),
  })
  .superRefine((data, context) => {
    if (data.password !== data.confirmPassword) {
      context.addIssue({
        code: 'custom',
        message: 'Confirm password must match password.',
        path: ['confirmPassword'],
      })
    }
  })

export const defaultRegistrationValues = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  password: '',
  confirmPassword: '',
}
