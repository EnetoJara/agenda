import { AxiosRequestConfig } from "axios";
import * as qs from "qs";

export const { ROUTE_HOME = "" } = process.env;
export const { ROUTE_LISTS = "/lists" } = process.env;
export const { ROUTE_LISTS_ID_USERS = "/lists/:id/users" } = process.env;
export const { ROUTE_LISTS_ID_USERS_ID = "/lists/:id/users/:id" } = process.env;

export const { API_LISTS = "/api/v1/lists" } = process.env;
export const { API_LISTS_ID = "/api/v1/lists/:id" } = process.env;
export const { API_ROUTE_TEST = "/test" } = process.env;

export const CLEAN_CURRENT_LIST = "@Lists/clean-current";
export type CLEAN_CURRENT_LIST = typeof CLEAN_CURRENT_LIST;

export const GET_LIST_REQUEST = "@Lists/GET-current-request";
export type GET_LIST_REQUEST = typeof GET_LIST_REQUEST;
export const GET_LIST_SUCCESS = "@Lists/GET-current-success";
export type GET_LIST_SUCCESS = typeof GET_LIST_SUCCESS;
export const GET_LIST_FAILED = "@Lists/GET-current-failed";
export type GET_LIST_FAILED = typeof GET_LIST_FAILED;

export const GET_LISTS_REQUEST = "@Lists/GET-all-request";
export type GET_LISTS_REQUEST = typeof GET_LISTS_REQUEST;
export const GET_LISTS_SUCCESS = "@Lists/GET-all-success";
export type GET_LISTS_SUCCESS = typeof GET_LISTS_SUCCESS;
export const GET_LISTS_FAILED = "@Lists/GET-all-failed";
export type GET_LISTS_FAILED = typeof GET_LISTS_FAILED;
export const POST_LISTS_REQUEST = "@Lists/POST-list-request";
export type POST_LISTS_REQUEST = typeof POST_LISTS_REQUEST;
export const POST_LISTS_SUCCESS = "@Lists/POST-list-success";
export type POST_LISTS_SUCCESS = typeof POST_LISTS_SUCCESS;
export const POST_LISTS_FAILED = "@Lists/POST-list-failed";
export type POST_LISTS_FAILED = typeof POST_LISTS_FAILED;
export const DELETE_LISTS_REQUEST = "@Lists/DELETE-list-request";
export type DELETE_LISTS_REQUEST = typeof DELETE_LISTS_REQUEST;
export const DELETE_LISTS_SUCCESS = "@Lists/DELETE-list-success";
export type DELETE_LISTS_SUCCESS = typeof DELETE_LISTS_SUCCESS;
export const DELETE_LISTS_FAILED = "@Lists/DELETE-list-failed";
export type DELETE_LISTS_FAILED = typeof DELETE_LISTS_FAILED;

export const GET_USERS_REQUEST = "@Users/GET-all-request";
export type GET_USERS_REQUEST = typeof GET_USERS_REQUEST;
export const GET_USERS_SUCCESS = "@Users/GET-all-success";
export type GET_USERS_SUCCESS = typeof GET_USERS_SUCCESS;
export const GET_USERS_FAILED = "@Users/GET-all-failed";
export type GET_USERS_FAILED = typeof GET_USERS_FAILED;
export const POST_USERS_REQUEST = "@Users/POST-list-request";
export type POST_USERS_REQUEST = typeof POST_USERS_REQUEST;
export const POST_USERS_SUCCESS = "@Users/POST-list-success";
export type POST_USERS_SUCCESS = typeof POST_USERS_SUCCESS;
export const POST_USERS_FAILED = "@Users/POST-list-failed";
export type POST_USERS_FAILED = typeof POST_USERS_FAILED;
export const DELETE_USERS_REQUEST = "@Users/DELETE-list-request";
export type DELETE_USERS_REQUEST = typeof DELETE_USERS_REQUEST;
export const DELETE_USERS_SUCCESS = "@Users/DELETE-list-success";
export type DELETE_USERS_SUCCESS = typeof DELETE_USERS_SUCCESS;
export const DELETE_USERS_FAILED = "@Users/DELETE-list-failed";
export type DELETE_USERS_FAILED = typeof DELETE_USERS_FAILED;

export const API_BASE  = process.env.API_BASE || "http://localhost:8282";
export const apiConfig: AxiosRequestConfig = {
    timeout: 15000,
    baseURL: API_BASE,
    headers: {
        common: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    },
    paramsSerializer: (params) => qs.stringify(params, { indices: false }),
};
