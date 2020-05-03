import { json, urlencoded } from "body-parser";
import { logger } from "./utils/logger";
import { errorHandler } from "./middlewares/error-handler";
import { listsRoutes, usersRoutes } from "./routes";
import { App } from "./utils/app";
import { DB } from "@eneto/api-rest";
import cors from "cors";
import { Request, Response, NextFunction } from "express";

export class Express extends App {
    [x: string]: any;
    public constructor (db: DB) {
        super();
        logger.debug("CONTRUCTOR EXPRESS");
        logger.debug("process.env.NODE_ENV", { meta: process.env.NODE_ENV });
        this.use(cors());
        this.use(function (req: Request, res: Response, next: NextFunction) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            next();
        });

        if (process.env.NODE_ENV === "production") {
            logger.debug("express running on production mode");
            this.use(require("helmet")());
            this.use(require("compression")());
        } else {
            logger.debug("express running on development mode");
        }

        this.use(json());
        this.use(urlencoded({ extended: true }));
        this.use("/api/v1", listsRoutes(db));
        this.use("/api/v1", usersRoutes(db));

        this.use(errorHandler);
    }
}
