import { NextFunction, Request, Response } from "express";
import { NotImplementedError } from "../error";
import { StatusCodes } from "http-status-codes";
import Services from "../services";

const problemService = new Services.ProblemService();

async function addProblem(_req: Request, _res: Response, next: NextFunction) {
  try {
    const problem = await problemService.createProblem(_req.body);
    _res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem created successfully",
      data: problem,
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblem(_req: Request, _res: Response, next: NextFunction) {
  try {
    const problem = await problemService.getProblemById(_req.params.id!);
    return _res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem fetched successfully",
      error: null,
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

function updateProblem(_req: Request, _res: Response) {
  throw new NotImplementedError("updateProblem is not implemented yet.");
}

function deleteProblem(_req: Request, _res: Response) {
  throw new NotImplementedError("deleteProblem is not implemented yet.");
}

async function getAllProblems(
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    const problems = await problemService.getProblems();
    return _res.status(StatusCodes.OK).json({
      success: true,
      message: "All problem fetched successfully",
      error: null,
      data: problems,
    });
  } catch (error) {
    next(error);
  }
}

export { addProblem, getProblem, updateProblem, deleteProblem, getAllProblems };
