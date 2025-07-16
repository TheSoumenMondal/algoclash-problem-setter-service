import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class NotFoundError extends BaseError {
  constructor(resource: string) {
    super("NotFoundError", StatusCodes.NOT_FOUND, `Resource not found: ${resource}`, {});
  }
}

export default NotFoundError;
