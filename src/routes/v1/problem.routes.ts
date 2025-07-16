import express, { Response } from "express";
import { StatusCodes } from "http-status-codes";

const problemRouter = express.Router();

problemRouter.get("/health", (_: any, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json({ message: "Problem service is running fine" });
});



problemRouter.post("/");
problemRouter.get("/:id");
problemRouter.get("/");
problemRouter.put("/:id");
problemRouter.delete("/:id");

export default problemRouter;
