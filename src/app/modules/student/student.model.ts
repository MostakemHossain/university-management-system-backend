import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
import {
  StudentMethods,
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentName,
} from './student.interface';

// Name Schema
const nameSchema = new Schema<TStudentName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last name is required'] },
});

// Guardian Schema
const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNumber: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNumber: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

// Local Guardian Schema
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNumber: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
  relation: {
    type: String,
    required: [true, 'Relation with local guardian is required'],
  },
});

// Student Schema
const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>({
  id: {
    type: String,
    unique: true,
    required: [true, 'Student Id is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  name: { type: nameSchema, required: true },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String, required: [true, 'Date of birth is required'] },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNumber: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImage: { type: String },
  isActive: { type: String, enum: ['active', 'blocked'], default: 'active' },
  isDeleted: { type: Boolean, default: false },
});

// pre save middleware
studentSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

/// post save middleware
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
studentSchema.methods.isUserExists = async function (id: string) {
  const isUserExists = await Student.findOne({ id });
  return isUserExists;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
