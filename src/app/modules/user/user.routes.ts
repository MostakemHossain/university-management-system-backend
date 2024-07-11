import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidation } from '../student/student.validation';
import { userController } from './user.controller';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidation.createStudentValidationSchema),
  userController.createStudent,
);

export const userRoutes = router;
