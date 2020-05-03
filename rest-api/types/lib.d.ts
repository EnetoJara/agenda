/// <reference types="node" />
/// <reference types="express" />

import { PathParams } from "express-serve-static-core";

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: "development" | "production" | "test";
        readonly PUBLIC_URL: string;
        readonly API_DB_USER: string;
        readonly API_DB_PASSWORD: string;
        readonly API_DB_NAME: string;
        readonly API_DB_HOST: string;
        readonly API_DB_PORT: string;
        readonly API_PORT: string;
        readonly API_DIALET: "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql" | undefined;
        readonly API_USERS_GET_ALL: PathParams;
        readonly API_USERS_INSERT: PathParams;
        readonly API_USERS_UPDATE_BY_ID: PathParams;
        readonly API_USERS_DELETE_BY_ID: PathParams;
        readonly API_LISTS_GET_BY_ID: PathParams;
        readonly API_LISTS_GET_ALL: PathParams;
        readonly API_LISTS_INSERT: PathParams;
        readonly API_LISTS_UPDATE_BY_ID: PathParams;
        readonly API_LISTS_DELETE_BY_ID: PathParams;
    }
}
