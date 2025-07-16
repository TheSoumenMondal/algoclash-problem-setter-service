import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class UnauthorizedError extends BaseError {
  constructor(message: string = "Unauthorized access") {
    super("UnauthorizedError", StatusCodes.UNAUTHORIZED, message, {});
  }
}

export default UnauthorizedError;
