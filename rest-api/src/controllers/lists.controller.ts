import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import { DB, EndPointResponse } from "@eneto/api-rest";
import { SuccessResponse } from "../utils/success.response";
import { OK, CREATED, getStatusText, BAD_REQUEST, ACCEPTED } from "http-status-codes";
import { apiResponse } from "../utils/response";
import { ErrorResponse } from "../utils/error.response";

export class ListController {
    private db: DB;
    public constructor (db: DB) {
        this.db = db;
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.deleteById = this.deleteById.bind(this);
        this.save = this.save.bind(this);
    }

    public async getAll (req: Request, res: Response, next: NextFunction): EndPointResponse {
        logger.debug("GET " + req.path);
        try {
            const myLists = await this.db.Lists.findAll();
            const response = new SuccessResponse({ data: myLists, statusCode: OK, path: req.path });

            return apiResponse(res, response);
        } catch (error) {
            logger.error("GET " + req.path, error);

            return next(error);
        }
    }
    public async getById (req: Request, res: Response, next: NextFunction): EndPointResponse {
        try {
            logger.debug("GET " + req.path);
            const { id = "" } = req.params;
            const foundit = await this.db.Lists.findOne({ where: { id: Number(id) } });
            const response = new SuccessResponse({ data: foundit, statusCode: OK, path: req.path });

            return apiResponse(res, response);
        } catch (error) {
            logger.error("GET " + req.path, error);

            return next(error);
        }
    }
    public async save (req: Request, res: Response, next: NextFunction): EndPointResponse {
        try {
            logger.debug("POST " + req.path);
            const {body} = req
            const exists = await this.db.Lists.findOne({ where: { name: body.name } });

            if (exists !== null && exists.id) {
                return apiResponse(
                    res,
                    new ErrorResponse({ data: "List Already exists", path: req.path, statusCode: BAD_REQUEST })
                );
            }
            await new this.db.Lists(body).save();

            return apiResponse(
                res,
                new SuccessResponse({
                    data: getStatusText(CREATED),
                    path: req.path,
                    statusCode: CREATED,
                    message: getStatusText(CREATED),
                })
            );
        } catch (error) {
            logger.error("POST " + req.path);
            console.log('error', error);

            return next(error);
        }
    }

    public deleteById (req: Request, res: Response, next: NextFunction): EndPointResponse {
        logger.debug("DELETE " + req.path);
        const { id } = req.params;

        return this.db.Lists.destroy({
            where: { id: Number(id) },
        })
            .then(() => {
                return apiResponse(
                    res,
                    new SuccessResponse({
                        data: getStatusText(ACCEPTED),
                        statusCode: ACCEPTED,
                        path: req.path,
                        message: getStatusText(ACCEPTED),
                    })
                );
            })
            .catch((onReject) => {
                return next(onReject);
            });
    }
}
