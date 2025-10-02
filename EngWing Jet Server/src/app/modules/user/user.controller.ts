import { Request, Response } from 'express';
import { User } from './user.model';
import { UserValidations, userValidationSchema } from './user.validation';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student } = req.body;

    // Data Validation
    // const zodParsedStudent =
    // UserValidations.userValidationSchema.parse(student);

    const result = await UserServices.createStudentIntoDB(password, student);

    res.status(200).json({
      success: true,
      message: 'An user is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(200).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

export const UserControllers = {
  createStudent,
};
