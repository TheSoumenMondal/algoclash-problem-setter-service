import { NextFunction, Request, Response } from "express";
import { BaseError } from "../error";
import { StatusCodes } from "http-status-codes";
import logger from "../config/logerConfig";

function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("=== ERROR OCCURRED ===");
  console.error("Error Name:", err.name);
  console.error("Error Message:", err.message);
  console.error("Stack Trace:");
  console.error(err.stack);
  console.error("=== END ERROR ===");
  
  logger.error("Error occurred", {
    message: err.message,
    stack: err.stack,
    name: err.name,
  });

  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      data: {},
      error: err.name,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  }
  
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "An unexpected error occurred",
    data: {},
    error: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}

export default errorHandler;
