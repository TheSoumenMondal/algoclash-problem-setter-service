import logger from "../config/logerConfig";
import { NotFoundError } from "../error";
import Problem from "../models/problem.model";
import { IProblem } from "../types/problem.type";

class ProblemRepository {
  async createProblem(problemData: Partial<IProblem>) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
        difficulty: problemData.difficulty,
        editorial: problemData.editorial,
      });
      return problem;
    } catch (error: any) {
      logger.error("Error creating problem:", error);
      throw error;
    }
  }

  async getProblemById(problemId: string) {
    try {
      const problem = await Problem.findById(problemId);
      if (!problem) {
        throw new NotFoundError(problemId as string);
      }
      return problem;
    } catch (error: any) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      logger.error("Error fetching problem by ID:", error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error: any) {
      logger.error("Error fetching all problems:", error);
      throw error;
    }
  }

  async updateProblem(id: string, data: Partial<IProblem>) {
    try {
      const updatedProblem = await Problem.findByIdAndUpdate(
        id,
        {
          title: data.title,
          description: data.description,
          testCases: data.testCases,
          difficulty: data.difficulty,
          editorial: data.editorial,
        },
        {
          new: true,
        }
      );
      if (!updatedProblem) {
        throw new NotFoundError(id);
      }
      return updatedProblem;
    } catch (error: any) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      logger.error("Error while updating the problem:", error);
      throw error;
    }
  }

  async deleteProblem(_id: string) {
    try {
      const result = await Problem.findByIdAndDelete({ _id: _id });
      if (!result) {
        logger.error(`Problem with ID ${_id} not found for deletion.`);
        throw new NotFoundError(_id);
      }
      return result;
    } catch (error: any) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      logger.error("Unable to delete problem:", error);
      throw error;
    }
  }
}

export default ProblemRepository;
