import httpStatus from 'http-status';

import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = httpStatus.BAD_REQUEST;

  constructor(public errors: ValidationError[]) {
    super(httpStatus['400_MESSAGE']);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err: ValidationError) => {
      return { message: err.msg };
    });
  }
}
