import { Model, model, Schema } from 'mongoose';
import {
  // StudentMethods,
  StudentModel,
  TName,
  TStudent,
} from './student.interface';

const nameSchema = new Schema<TName>(
  {
    firstName: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, 'Id is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    name: {
      type: nameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: 'Gender can be male | female | other',
      },
      required: true,
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    academicLevel: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

// Using Query Middleware
studentSchema.pre('find', function (next) {
  // Query before find operation
  this.find({ isDeleted: { $ne: true } });
  next();
});

// Query before findOne operation
studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// Query before aggregation operation
studentSchema.pre('aggregate', function (next) {
  // Query on find operation
  this.pipeline().unshift({
    $match: { isDeleted: { $ne: true } },
  });
  next();
});

// Using the static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });

  return existingUser;
};

// Using the instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });

//   return existingUser;
// };

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
