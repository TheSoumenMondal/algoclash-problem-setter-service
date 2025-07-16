import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class ForbiddenError extends BaseError {
  constructor(message: string = "Forbidden access") {
    super("ForbiddenError", StatusCodes.FORBIDDEN, message, {});
  }
}

export default ForbiddenError;
