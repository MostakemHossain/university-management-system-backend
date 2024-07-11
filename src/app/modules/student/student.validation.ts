import { z } from 'zod';

// Name Schema
const createNameValidationSchema = z.object({
  firstName: z.string({
    required_error: 'First name is required',
  }),
  middleName: z.string().optional(),
  lastName: z.string({
    required_error: 'Last name is required',
  }),
});

// Guardian Schema
const createGuardianValidationSchema = z.object({
  fatherName: z.string({
    required_error: "Father's name is required",
  }),
  fatherOccupation: z.string({
    required_error: "Father's occupation is required",
  }),
  fatherContactNumber: z.string({
    required_error: "Father's contact number is required",
  }),
  motherName: z.string({
    required_error: "Mother's name is required",
  }),
  motherOccupation: z.string({
    required_error: "Mother's occupation is required",
  }),
  motherContactNumber: z.string({
    required_error: "Mother's contact number is required",
  }),
});

// Local Guardian Schema
const createLocalGuardianValidationSchema = z.object({
  name: z.string({
    required_error: "Local guardian's name is required",
  }),
  occupation: z.string({
    required_error: "Local guardian's occupation is required",
  }),
  contactNumber: z.string({
    required_error: "Local guardian's contact number is required",
  }),
  address: z.string({
    required_error: "Local guardian's address is required",
  }),
  relation: z.string({
    required_error: 'Relation with local guardian is required',
  }),
});

// Student Schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string({
      required_error: 'Password is  required',
    }),
    student: z.object({
      name: createNameValidationSchema,
      gender: z.enum(['male', 'female', 'other'], {
        required_error: 'Gender is required',
      }),
      dateOfBirth: z.string({
        required_error: 'Date of birth is required',
      }),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email({
          message: 'Please fill a valid email address',
        }),
      contactNumber: z.string({
        required_error: 'Contact number is required',
      }),
      emergencyContactNumber: z.string({
        required_error: 'Emergency contact number is required',
      }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string({
        required_error: 'Present address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema,
      profileImage: z.string().optional(),
      isActive: z.enum(['active', 'blocked']).default('active'),
      isDeleted: z.boolean().default(false),
    }),
  }),
});

export const studentValidation = {
  createStudentValidationSchema,
};
