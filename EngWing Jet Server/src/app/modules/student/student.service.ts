import { TStudent } from './student.interface';
import { Student } from './student.model';

// Insert a student
const createStudentIntoDB = async (studentData: TStudent) => {
  // built-in static method Class.method()
  const result = Student.create(studentData);
  return result;
};

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
  const result = await Student.aggregate([
    {
      $match: { id: id },
    },
    {
      $set: { isDeleted: true },
    },
  ]);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
