import express, { Response } from "express";
import { serverConfig } from "./config/serverConfig";
import bodyParser from "body-parser";
import { StatusCodes } from "http-status-codes";
import apiRouter from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/", (_, res: Response) => {
  res.status(StatusCodes.OK).json({
    message: "Server is up and running.",
  });
});

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`⚙️ Server is running on ${serverConfig.PORT}`);
});
