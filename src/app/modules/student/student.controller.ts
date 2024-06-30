import { Request, Response } from 'express';
import { studentService } from './student.service';
import { studentValidation } from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const validateData =
      studentValidation.studentValidationSchema.parse(student);

    const result = await studentService.createStudentIntoDB(validateData);
    res.status(201).json({
      success: true,
      message: 'Student Created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Get All Students retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getSingleStudentsFromDB(
      req.params.studentId,
    );
    res.status(200).json({
      success: true,
      message: 'Get  Student retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};
const deleteStudentsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await studentService.deleteStudentsFromDB(
      req.params.studentId,
    );
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudentsFromDB,
};
