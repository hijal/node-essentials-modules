import httpStatus from 'http-status';
import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  reason = httpStatus['500_MESSAGE'];
  statusCode = httpStatus.INTERNAL_SERVER_ERROR;

  constructor() {
    super(httpStatus['500_MESSAGE']);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
