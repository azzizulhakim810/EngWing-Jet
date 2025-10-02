import z from 'zod';

export const userValidationSchema = z.object({
  password: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'This field is required' : 'Not a string',
    })
    .max(20, { message: 'password must be within 20 characters' })
    .optional(),

  // id: z.string().nonempty('Id is required'), // It will be generated on the backend

  // needsPasswordChange: z.boolean().optional().default(true), // Set default from the model already, so no need to check anything

  // role: z.enum(['student', 'mentor', 'admin']).nonoptional(), // Role will be set automatically regarding the api end point

  // status: z.enum(['in-progress', 'blocked']).default('in-progress'), // Set default from the model already, so no need to check anything

  // isDeleted: z.boolean().optional().default(false), // Set default from the model already, so no need to check anything
});

export const UserValidations = {
  userValidationSchema,
};
