import { AppAction, NewList } from "@eneto/api-client";
import { call, put } from "redux-saga/effects";

import {
    GET_LIST_FAILED,
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LISTS_FAILED,
    GET_LISTS_REQUEST,
    GET_LISTS_SUCCESS,
    GET_USERS_REQUEST,
    POST_LISTS_FAILED,
    POST_LISTS_REQUEST,
    POST_LISTS_SUCCESS,
} from "../../utils/constants";
import { usersAction } from "../users/users-actions";
import { listsAction } from "./lists-actions";
import { listApi } from "./lists-api";


export function* getListWorker (action: AppAction<GET_LIST_REQUEST, string>) {
    try {
        const { payload } = action
        const idList = Number(payload);
        yield put(usersAction(GET_USERS_REQUEST, idList))
        const listByID = yield call(listApi.getListById, idList)

        yield put(listsAction(GET_LIST_SUCCESS, listByID.data))
    } catch (error) {
        yield put(listsAction(GET_LIST_FAILED, error))
    }
}
export function* postLists (action: AppAction<POST_LISTS_REQUEST, NewList>) {
    try {
        const { payload } = action;

        const res = yield call(listApi.postNewList, payload.name, payload.description);
        if (res === 201) {
            yield put(listsAction(GET_LISTS_REQUEST, undefined))
        }
        yield put(listsAction(POST_LISTS_SUCCESS, res))
    } catch (error) {
        yield put(listsAction(POST_LISTS_FAILED, error))
    }
}
export function* deleteListsWorker () {
    yield console.log("trl");
}

export function* getAllListsWorker () {
    try {
        const lists = yield call(listApi.getLists);

        yield put(listsAction(GET_LISTS_SUCCESS, lists.data));

        return lists.data
    } catch (error) {
        yield put(listsAction(GET_LISTS_FAILED, error));
    }
}
