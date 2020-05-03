import {put, call} from "redux-saga/effects";

import { AppAction, NewUser } from '@eneto/api-client';
import { GET_USERS_REQUEST, GET_USERS_FAILED, POST_USERS_REQUEST, POST_USERS_FAILED, POST_USERS_SUCCESS, GET_USERS_SUCCESS } from '../../utils/constants';
import { usersAction } from './users-actions';
import {userApi} from "./users-api";

export function* workerGetAllUsers (action: AppAction<GET_USERS_REQUEST, number>) {
    try {
        const users = yield call(userApi.getAllUsersByList, action.payload);
        yield put(usersAction(GET_USERS_SUCCESS, users));
    } catch (error) {
        yield put(usersAction(GET_USERS_FAILED, error))
    }
}

export function* workerPostUsers (action: AppAction<POST_USERS_REQUEST, NewUser>) {
    try {
        const {payload} = action;

        const res = yield call(userApi.insertNewUser, payload)
        yield put(usersAction(POST_USERS_SUCCESS, res))
        yield put(usersAction(GET_USERS_REQUEST, payload.listId))
    } catch (error) {
        put(usersAction(POST_USERS_FAILED, error));
    }
}
