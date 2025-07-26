import { Document } from "mongoose";

export interface TestCase {
  input: string;
  output: string;
}

type CodeStub = {
  language: "PYTHON" | "JAVA" | "CPP";
  startSnippet: string;
  userSnippet: string;
  endSnippet: string;
};

export interface IProblem extends Document {
  title: string;
  description: string;
  testCases: TestCase[];
  codeStubs: CodeStub[];
  difficulty: "easy" | "medium" | "hard";
  editorial?: string;
}
