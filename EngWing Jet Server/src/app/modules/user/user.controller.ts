import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

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
