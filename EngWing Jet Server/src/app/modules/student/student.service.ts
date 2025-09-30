import { Student } from './student.model';

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
};
