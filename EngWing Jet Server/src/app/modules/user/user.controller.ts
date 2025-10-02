import { NextFunction, Request, RequestHandler, Response } from 'express';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student } = req.body;

  // Data Validation
  // const zodParsedStudent =
  // UserValidations.userValidationSchema.parse(student);

  const result = await UserServices.createStudentIntoDB(password, student);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'An user is created successfullyl',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
