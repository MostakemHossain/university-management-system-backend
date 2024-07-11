import { TStudent } from './student.interface';
import { Student } from './student.model';


const getAllStudentsFromDB = async () => {
  const result = await Student.find({});
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findById(id);
  return result;
};
const deleteStudentsFromDB = async (id: string) => {
  const result = await Student.findByIdAndUpdate(id, { isDeleted: true });
  return result;
};

export const studentService = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
