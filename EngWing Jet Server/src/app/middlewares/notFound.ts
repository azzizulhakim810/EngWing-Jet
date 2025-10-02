import { NextFunction, Request, Response } from 'express';
import status from 'http-status';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(status.NOT_FOUND).json({
    success: false,
    message: 'Wrong API Call',
    error: '',
  });
};

export default notFound;
