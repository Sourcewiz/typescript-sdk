export interface HttpErrorDetails {
  field: string;
  reason: string;
}

export interface HttpError {
  code: string;
  message: string;
  details?: HttpErrorDetails[];
}

export class ApiError extends Error implements HttpError {
  code: string;
  details?: HttpErrorDetails[];

  constructor(error: HttpError) {
    super(error.message);
    this.code = error.code;
    this.details = error.details;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}