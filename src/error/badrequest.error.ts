import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class BadRequestError extends BaseError {
  constructor(message: string = "Bad request") {
    super("BadRequestError", StatusCodes.BAD_REQUEST, message, {});
  }
}

export default BadRequestError;
