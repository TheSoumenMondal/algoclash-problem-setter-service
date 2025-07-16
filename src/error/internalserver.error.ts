import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class InternalServerError extends BaseError {
  constructor(message: string = "Internal server error") {
    super("InternalServerError", StatusCodes.INTERNAL_SERVER_ERROR, message, {});
  }
}

export default InternalServerError;
