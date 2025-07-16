import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class ServiceUnavailableError extends BaseError {
  constructor(message: string = "Service unavailable") {
    super("ServiceUnavailableError", StatusCodes.SERVICE_UNAVAILABLE, message, {});
  }
}

export default ServiceUnavailableError;
