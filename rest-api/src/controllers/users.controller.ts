import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import { DB, EndPointResponse } from "@eneto/api-rest";
import { SuccessResponse } from "../utils/success.response";
import { OK, CREATED, getStatusText, ACCEPTED } from "http-status-codes";
import { apiResponse } from "../utils/response";

export class UsersController {
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
            const {id} = req.params;
            const myUsers = await this.db.Users.findAll({where: {listId: Number(id)}});
            const response = new SuccessResponse({ data: myUsers, statusCode: OK, path: req.path });

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
            const foundit = await this.db.Users.findOne({ where: { id: Number(id) } });
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
            const { body } = req;

            await new this.db.Users(body).save();

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

            return next(error);
        }
    }

    public deleteById (req: Request, res: Response, next: NextFunction): EndPointResponse {
        logger.debug("DELETE " + req.path);
        const { id } = req.params;

        return this.db.Users.destroy({
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
