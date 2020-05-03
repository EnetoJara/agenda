import { Response } from "express";
import { getStatusText, NOT_ACCEPTABLE, INTERNAL_SERVER_ERROR } from "http-status-codes";
import { ErrorResponse } from "./error.response";
import { SuccessResponse } from "./success.response";
import { applicationJson } from "./constants";

/**
 * Parses and gives format to the payload sended to the client.
 *
 * @param {import("express").Response} res - HTTP response object.
 * @param {import("./error.response").ErrorResponse | import("./success.response").SuccessResponse} payload - response body.
 * @returns {import("express").Response} Formated object to response back to client.
 */
export function apiResponse<D> (res: Response, payload: SuccessResponse<D> | ErrorResponse<D>): Response {
    return res.format({
        json: () => {
            res.type(applicationJson);
            res.status(payload.statusCode || INTERNAL_SERVER_ERROR).send(payload);
        },
        default: () => {
            res.status(NOT_ACCEPTABLE).send(getStatusText(NOT_ACCEPTABLE));
        },
    });
}
