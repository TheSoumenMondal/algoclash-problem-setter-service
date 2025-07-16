import express, { Response } from "express";
import { serverConfig } from "./config/serverConfig";
import bodyParser from "body-parser";
import { StatusCodes } from "http-status-codes";
import apiRouter from "./routes";
import errorHandler from "./utils/errorHandler";
import { connectDB } from "./config/dbConfig";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (_, res: Response) => {
  res.status(StatusCodes.OK).json({
    message: "Server is up and running.",
  });
});

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(serverConfig.PORT, async () => {
  await connectDB();
  console.log(`⚙️  Server is running on ${serverConfig.PORT}`);
});
