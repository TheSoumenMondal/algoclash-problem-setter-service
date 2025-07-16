import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class ConflictError extends BaseError {
  constructor(message: string = "Resource conflict") {
    super("ConflictError", StatusCodes.CONFLICT, message, {});
  }
}

export default ConflictError;
