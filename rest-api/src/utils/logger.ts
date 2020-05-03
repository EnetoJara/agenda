import * as winston from "winston";
import { TransformableInfo } from "logform";

const { colorize, combine, timestamp, label, printf, json } = winston.format;

export const myFormat = printf((info: TransformableInfo) => {
    return `[38;5;225m[${info.timestamp}][0m [${info.level}] [38;5;14m=>[0m ${info.message} ${info.meta || ""}`;
});

export const logger = winston.createLogger({
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        verbose: 3,
        debug: 4,
        http: 5,
    },
    level: process.env.NODE_ENV === "production" ? "error" : "debug",
    format: combine(
        label({ label: "order-api errors" }),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        colorize({
            colors: {
                error: "red",
                warn: "orange",
                info: "yellow",
                verbose: "blue",
                debug: "green",
                http: "pink",
            },
        }),
        json(),
        myFormat
    ),

    transports: [
        new winston.transports.File({ filename: "info.log", level: "info" }),
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.Console(),
    ],
});
