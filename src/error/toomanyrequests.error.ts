import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class TooManyRequestsError extends BaseError {
  constructor(message: string = "Too many requests") {
    super("TooManyRequestsError", StatusCodes.TOO_MANY_REQUESTS, message, {});
  }
}

export default TooManyRequestsError;
