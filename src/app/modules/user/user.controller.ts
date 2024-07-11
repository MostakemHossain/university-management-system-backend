import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userService } from './user.service';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { password, student } = req.body;

  const result = await userService.createStudentIntoDB(password, student);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Student Created successfully',
    data: result,
  });
});

export const userController = {
  createStudent,
};
