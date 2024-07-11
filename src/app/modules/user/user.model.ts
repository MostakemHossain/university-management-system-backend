import bcrypt from 'bcrypt';
import mongoose, { Schema } from 'mongoose';
import config from '../../config';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'faculty', 'student'],
        message: 'Role must be either admin, faculty, or student',
      },
      required: [true, 'Role is required'],
    },
    status: {
      type: String,
      enum: {
        values: ['active', 'blocked'],
        message: 'Status must be either active or blocked',
      },
      default: 'active',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

/// post save middleware
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = mongoose.model('User', userSchema);
