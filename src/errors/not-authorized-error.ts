import httpStatus from 'http-status';
import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
  statusCode = httpStatus.UNAUTHORIZED;

  constructor() {
    super('Authentication is required');

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors(): { message: string }[] {
    return [
      {
        message: 'Authentication is required'
      }
    ];
  }
}
