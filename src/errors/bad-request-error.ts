import httpStatus from 'http-status';

import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode: number = httpStatus.BAD_REQUEST;

  constructor(public message: string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
