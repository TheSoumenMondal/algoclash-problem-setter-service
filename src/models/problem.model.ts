import mongoose from "mongoose";
import { IProblem } from "../types/problem.type";

const problemSchema = new mongoose.Schema<IProblem>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    testCases: [
      {
        input: { type: String, required: [true, "Input is required"] },
        output: { type: String, required: [true, "Output is required"] },
      },
    ],
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: [true, "Difficulty is required"],
      default: "easy",
    },
    editorial: {
      type: String,
    },
  },
  { timestamps: true }
);

const Problem = mongoose.model<IProblem>("Problem", problemSchema);

export default Problem;
