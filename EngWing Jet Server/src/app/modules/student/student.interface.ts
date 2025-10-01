import { Model } from 'mongoose';

export type TName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  name: TName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  profileImage?: string;
  academicLevel: string;
  isDeleted: boolean;
};

// Static Method
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

// Instance Method
/* type StudentMethods = {
  isUserExists(id: string): Promise<TStudent | null>; // Either return Student Object if available, otherwise null
}; */

// export type StudentModel = Model<TStudent, {}, StudentMethods>;
