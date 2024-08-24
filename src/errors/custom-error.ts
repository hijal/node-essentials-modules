export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(public message: string) {
    super();

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeErrors(): { message: string }[];
}
