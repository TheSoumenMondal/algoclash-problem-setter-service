import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class ValidationError extends BaseError {
  constructor(message: string = "Validation failed") {
    super("ValidationError", StatusCodes.BAD_REQUEST, message, {});
  }
}

export default ValidationError;
