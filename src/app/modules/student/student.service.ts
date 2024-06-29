import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (payload: TStudent) => {
  const result = await Student.create(payload);
  return result;
};
const getAllStudentsFromDB = async () => {
  const result = await Student.find({});
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
};
