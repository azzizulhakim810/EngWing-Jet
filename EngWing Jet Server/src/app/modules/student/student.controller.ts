import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

/* const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    // Data validation using Zod
    const zodParsedData = studentValidationSchema.parse(student);

    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'A student is created succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
}; */

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Students are retrieved succesfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'A student is retrieved succesfully',
    data: result,
  });
});

const updateSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { updatedDoc } = req.body;
  const result = await StudentServices.updateSingleStudentFromDB(
    id,
    updatedDoc,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'A student is updated succesfully',
    data: result,
  });
});

const deleteSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.deleteSingleStudentFromDB(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'A student is deleted succesfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  updateSingleStudent,
  deleteSingleStudent,
};
