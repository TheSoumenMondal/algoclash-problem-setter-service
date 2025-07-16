import Repositories from "../repositories";
import { IProblem } from "../types/problem.type";
import { sanitizeMarkdown } from "../utils/markdownSanitizer";

class ProblemService {
  private problemRepository: InstanceType<
    typeof Repositories.ProblemRepository
  >;

  constructor(
    problemRepository?: InstanceType<typeof Repositories.ProblemRepository>
  ) {
    this.problemRepository =
      problemRepository || new Repositories.ProblemRepository();
  }

  async createProblem(problemData: Partial<IProblem>) {
    const sanitizedDescription = await sanitizeMarkdown(
      problemData.description as string
    );

    const sanitizedProblemData = {
      ...problemData,
      description: sanitizedDescription,
    };

    const problem = await this.problemRepository.createProblem(
      sanitizedProblemData
    );
    return problem;
  }

  async getProblemById(problemId: string) {
    const problem = await this.problemRepository.getProblemById(problemId);
    return problem;
  }

  async getProblems() {
    const allProblems = await this.problemRepository.getAllProblems();
    return allProblems;
  }

  async updateProblem(problemId: string, problemData: Partial<IProblem>) {
    if (problemData.description) {
      const sanitizedDescription = await sanitizeMarkdown(
        problemData.description as string
      );
      problemData = {
        ...problemData,
        description: sanitizedDescription,
      };
    }

    const problem = await this.problemRepository.updateProblem(
      problemId,
      problemData
    );
    return problem;
  }

  async deleteProblem(_id: string) {
    await this.problemRepository.deleteProblem(_id);
  }
}

export default ProblemService;
