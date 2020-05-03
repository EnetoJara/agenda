import { Router } from "express";
import { API_ROUTE_TEST, API_LISTS_GET_ALL, API_LISTS_INSERT, API_LISTS_DELETE_BY_ID, API_LISTS_GET_BY_ID } from "../utils/constants";
import { TestController } from "../controllers/test.controller";
import { ListController } from "../controllers/lists.controller";
import { DB } from "@eneto/api-rest";

/**
 *
 */
export function listsRoutes (db: DB): Router {
    const api = Router();
    const test = new TestController();
    const list = new ListController(db);

    api.get(API_ROUTE_TEST, test.health);
    api.get(API_LISTS_GET_ALL, list.getAll);
    api.post(API_LISTS_INSERT, list.save);
    api.get(API_LISTS_GET_BY_ID, list.getById);
    api.delete(API_LISTS_DELETE_BY_ID, list.deleteById);

    return api;
}
