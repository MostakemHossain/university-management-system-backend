import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (payload: TStudent) => {
  const student = new Student(payload);
  if (await student.isUserExists(payload.id)) {
    throw new Error('Student is Already exists');
  }
  const result = await student.save();
  return result;
};
const getAllStudentsFromDB = async () => {
  const result = await Student.find({});
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findById(id);
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
