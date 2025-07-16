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
      throw new Error(`Error creating problem: ${error.message}`);
    }
  }

  async getProblemById(problemId: string) {
    const problem = await Problem.findById({ _id: problemId });
    if (!problem) {
      throw new NotFoundError(problemId as string);
    }
    return problem;
  }

  async getAllProblems() {
    const problems = await Problem.find({});
    if (!problems) {
      throw new NotFoundError("No problems found");
    }
    return problems;
  }
}

export default ProblemRepository;
