import { Response, Request, NextFunction } from 'express';
import httpStatus from 'http-status';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors()
    });
  }

  console.error(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    errors: [{ message: err.message }]
  });
};
