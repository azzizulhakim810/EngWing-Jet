import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../config';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: ['student', 'mentor', 'admin'],
        message: 'Please select one of them',
      },
      required: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

///////////////// Using Document Middleware ///////////////////
// Using Document Middleware Pre & Post <While Saving or Removing Any Document>
userSchema.pre('save', async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  // Hashing the password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
});

// Better ways to strip the password so that it wouldn't be leaked in any api calls <find, findOne, aggregation, delete, update etc>
userSchema.set('toJSON', {
  transform: function (doc, ret: any) {
    delete ret.password; // remove the pass from JSON output
    return ret;
  },
});

userSchema.set('toObject', {
  transform: function (doc, ret: any) {
    delete ret.password; // remove the pass from Object output
    return ret;
  },
});

export const User = model<TUser>('User', userSchema);
