import { Request, Response, NextFunction } from "express";
import { SuccessResponse } from "../utils/success.response";
import { apiResponse } from "../utils/response";

export class TestController {
    public constructor () {
        this.health = this.health.bind(this);
    }

    public health (req: Request, res: Response, next: NextFunction): void | Response {
        try {
            const payload = new SuccessResponse<string>({ data: "test", path: req.path });

            return apiResponse(res, payload);
        } catch (error) {
            return next(error);
        }
    }
}
