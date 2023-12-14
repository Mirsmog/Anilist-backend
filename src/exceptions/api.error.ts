class ApiError extends Error {
  status: number;
  errors: Array<string>;
  constructor(status: number, message: string, errors: Array<string> = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
  static UnauthorizedError() {
    return new ApiError(401, 'user is unauthorized');
  }
  static NothingFoundError(message: string, errors = []) {
    return new ApiError(404, message, errors);
  }
  static BadRequest(message: string, errors = []) {
    return new ApiError(400, message, errors);
  }

  static ConflictError(message: string, errors = []) {
    return new ApiError(409, message, errors);
  }
}

export default ApiError;
