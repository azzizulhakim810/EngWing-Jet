import { NextFunction, Request, Response } from 'express';
import { User } from './user.model';
import { UserValidations, userValidationSchema } from './user.validation';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
