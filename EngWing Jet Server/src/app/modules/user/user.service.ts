import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

// Insert a student
const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create an user object
  const userData: Partial<TUser> = {}; // as TUser contains the userFields so make it partial or optional so that other elements doesn't require

  // If password is not getEnvironmentData, use the default password
  userData.password = password || (config.default_pass as string);

  // set manually generated id
  userData.id = '202510001';

  // set user role
  userData.role = 'student';

  // create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id & _id as user
    studentData.id = newUser.id; // embedding id
    studentData.user = newUser._id; // reference _id

    // create a student
    const newStudent = await Student.create(studentData);

    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
