import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      required_error: 'Password is required',
    })
    .optional(),
  needsPasswordChange: z.boolean().default(true),
  status: z
    .enum(['active', 'blocked'], {
      required_error: 'Status is required',
    })
    .default('active'),
  isDeleted: z.boolean().default(false),
});

export const userValidation = {
  userValidationSchema,
};
