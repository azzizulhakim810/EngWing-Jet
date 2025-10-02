import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body;

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
