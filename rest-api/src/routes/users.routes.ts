import { Router } from "express";
import { API_ROUTE_TEST, API_USERS_GET_ALL, API_USERS_INSERT, API_USERS_DELETE_BY_ID } from "../utils/constants";
import { TestController } from "../controllers/test.controller";
import { DB } from "@eneto/api-rest";
import { UsersController } from "../controllers/users.controller";

export function usersRoutes (db: DB): Router {
    const api = Router();
    const test = new TestController();
    const users = new UsersController(db);

    api.get(API_ROUTE_TEST, test.health);
    api.get(API_USERS_GET_ALL, users.getAll);
    api.post(API_USERS_INSERT, users.save);
    api.delete(API_USERS_DELETE_BY_ID, users.deleteById);

    return api;
}
