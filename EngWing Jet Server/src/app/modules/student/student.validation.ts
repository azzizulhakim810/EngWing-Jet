import { z } from 'zod';

export const nameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, 'First Name cant be more than 10')
    .trim()
    .nonempty('First Name is required'),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1)
    .trim()
    .nonempty('Last Name is required')
    .regex(/^[A-Za-z]+$/, { message: 'Last Name must contain only letters' }),
});

export const studentValidationSchema = z.object({
  id: z.string().nonempty('Student ID is required'),

  name: nameValidationSchema,

  password: z
    .string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Minimum eight characters, at least one letter and one number',
    )
    .nonempty('Password is required'),

  gender: z.enum(['male', 'female', 'other'], {
    error: 'Gender can be male | female | other',
  }),

  dateOfBirth: z.string().optional(),

  email: z.email('Invalid email format').nonempty('Email is required'),

  contactNo: z.string().nonempty('Contact Number is required'),

  emergencyContactNo: z
    .string()
    .nonempty('Emergency Contact Number is required'),

  presentAddress: z.string().nonempty('Present Address is required'),

  profileImage: z.url().optional(),

  academicLevel: z.string().nonempty('Please specify your Academic Level'),

  isDeleted: z.boolean().default(false),
});

export default studentValidationSchema;
