import { Error } from 'mongoose';
import { TStudent } from './student.interface';
import { Student } from './student.model';

// Retrieve all students
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

/* 
// Retrieve a single student ----- Using findOne()
const getSingleStudentFromDB = async (id: number | string) => {
  const result = await Student.findOne({ id });
  return result;
}; 
*/

// Retrieve a single student ----- Using aggregation([])
const getSingleStudentFromDB = async (id: number | string) => {
  const result = await Student.aggregate([
    {
      $match: { id: id },
    },
  ]);
  return result;
};

// Update a single student ----- Using aggregation([])
const updateSingleStudentFromDB = async (
  id: number | string,
  updatedDoc: string,
) => {
  const result = await Student.aggregate([
    {
      $match: { id: id },
    },
    {
      $set: { academicLevel: updatedDoc },
    },
  ]);
  return result;
};

// Soft Delete(update deleted true) a single student
const deleteSingleStudentFromDB = async (id: number | string) => {
  const result = await Student.findByIdAndUpdate(id, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
