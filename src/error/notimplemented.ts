import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class NotImplementedError extends BaseError {
  constructor(feature: string) {
    super("NotImplementedError", StatusCodes.NOT_IMPLEMENTED, `Feature not implemented: ${feature}`, {});
  }
}

export default NotImplementedError;
