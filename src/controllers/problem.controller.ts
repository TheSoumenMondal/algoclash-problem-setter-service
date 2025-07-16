import { NextFunction, Request } from "express";
import { NotImplementedError } from "../error";

async function createProblem(req: Request, res: Response, next: NextFunction) {
  try {
    throw new NotImplementedError(req.originalUrl);
  } catch (error) {
    next(error);
  }
}


export { createProblem };