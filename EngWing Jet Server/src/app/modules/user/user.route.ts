import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { ZodObject, ZodRawShape } from 'zod';
import { studentValidationSchema } from '../student/student.validation';

const router = express.Router();

const validateRequest = (schema: ZodObject<ZodRawShape>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validation
      await schema.parseAsync({
        body: req.body,
      });

      next();
    } catch (error) {
      next(error);
    }
  };
};

router.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
