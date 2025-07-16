import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
  fn : any
) => {
  try {
    return fn(err, req, res, next);
  } catch (error) {
    next(err);
  }
};
