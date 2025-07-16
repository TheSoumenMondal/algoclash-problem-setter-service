import { Document } from "mongoose";

export interface TestCase {
  input: string;
  output: string;
}

export interface IProblem extends Document {
  title: string;
  description: string;
  testCases: TestCase[];
  difficulty: "easy" | "medium" | "hard";
  editorial?: string;
}
