import winston from "winston";
import "winston-mongodb";
import { serverConfig } from "./serverConfig";

const allowedTransports = [];

allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  })
);

// allowedTransports.push(
//   new winston.transports.File({
//     filename: `error.log`,
//   })
// );

allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: serverConfig.MONGODB_LOGGER_URI!,
    collection: "logs",
    format: winston.format.combine(
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf((log) => {
        return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`;
      })
    ),
  })
);



const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf((info) => {
      return `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`;
    })
  ),
  transports: allowedTransports,
});

export default logger;
