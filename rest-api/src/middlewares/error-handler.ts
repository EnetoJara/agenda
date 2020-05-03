import { ErrorResponse } from "../utils/error.response";
import { Request, Response, NextFunction } from "express";
import { apiResponse } from "../utils/response";

export function errorHandler<T> (error: ErrorResponse<T>, req: Request, res: Response, next: NextFunction): Response {
    return apiResponse(res, error);
}
