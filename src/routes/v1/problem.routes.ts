import express, { Response } from "express";
import { StatusCodes } from "http-status-codes";
import problemController from "../../controllers";

const problemRouter = express.Router();

problemRouter.get("/ping", (_: any, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json({ message: "Problem service is running fine" });
});

problemRouter.post("/", problemController.addProblem);
problemRouter.get("/:id", problemController.getProblem);
problemRouter.get("/", problemController.getAllProblems);
// problemRouter.put("/:id", problemController.updateProblem);
// problemRouter.delete("/:id", problemController.deleteProblem);

export default problemRouter;
