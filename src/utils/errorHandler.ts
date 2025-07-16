import { NextFunction, Request, Response } from "express";
import { BaseError } from "../error";
import { StatusCodes } from "http-status-codes";

function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      data: {},
      error: err.name,
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "An unexpected error occurred",
    data: {},
    error: err,
  });
}

export default errorHandler;
