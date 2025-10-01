import { Model, model, Schema } from 'mongoose';
import {
  // StudentMethods,
  StudentModel,
  TName,
  TStudent,
} from './student.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

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

///////////////// Using Query Middleware ///////////////////
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

///////////////// Using Document Middleware ///////////////////
// Using Document Middleware Pre & Post <While Saving or Removing Any Document>
studentSchema.pre('save', async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  // Hashing the password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  console.log(this, 'Before saving the Data');
});

// Removing the password from response
studentSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
});

// Better ways to strip the password so that it wouldn't be leaked in any api calls <find, findOne, aggregation, delete, update etc>
studentSchema.set('toJSON', {
  transform: function (doc, ret: any) {
    delete ret.password; // remove the pass from JSON output
    return ret;
  },
});

studentSchema.set('toObject', {
  transform: function (doc, ret: any) {
    delete ret.password; // remove the pass from Object output
    return ret;
  },
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
