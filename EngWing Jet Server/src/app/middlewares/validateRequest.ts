import { NextFunction, Request, Response } from 'express';
import { ZodObject, ZodRawShape } from 'zod';

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

export default validateRequest;
