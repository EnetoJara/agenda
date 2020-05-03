import { PathParams } from "express-serve-static-core";

export const applicationJson = "application/json";

export const NODE_ENV = process.env.NODE_ENV || "development";
export const API_DB_USER = process.env.API_DB_USER || "postgres";
export const API_DB_PASSWORD = process.env.API_DB_PASSWORD || "";
export const API_DB_NAME = process.env.API_DB_NAME || "rest-agenda-api";
export const API_DB_HOST = process.env.API_DB_HOST || "localhost";
export const API_DB_PORT = process.env.API_DB_PORT || "5433";
export const API_PORT = process.env.API_PORT || "8080";
export const API_DIALET = process.env.API_DIALET || "postgres";
export const API_USERS_GET_ALL: PathParams = process.env.API_USERS_GET_ALL || "/users/:id";
export const API_USERS_INSERT: PathParams = process.env.API_USERS_INSERT || "/users";
export const API_USERS_UPDATE_BY_ID: PathParams = process.env.API_USERS_UPDATE_BY_ID || "/users/:id";
export const API_USERS_DELETE_BY_ID: PathParams = process.env.API_USERS_DELETE_BY_ID || "/users/:id";
export const API_LISTS_GET_BY_ID: PathParams = process.env.API_LISTS_GET_BY_ID || "/users/:id";
export const API_LISTS_GET_ALL: PathParams = process.env.API_LISTS_GET_ALL || "/lists";
export const API_LISTS_INSERT: PathParams = process.env.API_LISTS_INSERT || "/lists";
export const API_LISTS_UPDATE_BY_ID: PathParams = process.env.API_LISTS_UPDATE_BY_ID || "/lists/:id";
export const API_LISTS_DELETE_BY_ID: PathParams = process.env.API_LISTS_DELETE_BY_ID || "/lists/:id";
export const API_ROUTE_TEST: PathParams = process.env.API_ROUTE_TEST || "/test";
