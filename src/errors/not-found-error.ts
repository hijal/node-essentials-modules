import httpStatus from 'http-status';

import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode: number = httpStatus.NOT_FOUND;

  constructor() {
    super(httpStatus['404_MESSAGE']);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
