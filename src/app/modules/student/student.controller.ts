import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { studentService } from './student.service';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await studentService.getAllStudentsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Get All Students retrieved successfully',
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await studentService.getSingleStudentsFromDB(
    req.params.studentId,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Get  Student retrieved successfully',
    data: result,
  });
});
const deleteStudentsFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await studentService.deleteStudentsFromDB(
    req.params.studentId,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student deleted successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudentsFromDB,
};
