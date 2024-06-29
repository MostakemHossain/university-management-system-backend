import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.createStudentIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: 'Student Created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message,
      error: error,
    });
  }
};

export const studentController = {
  createStudent,
};
