import { fork, takeEvery, ForkEffect } from "redux-saga/effects";
import { GET_USERS_REQUEST, POST_USERS_REQUEST } from '../../utils/constants';
import {workerGetAllUsers, workerPostUsers} from "./users-workers";
function* WatchGetAllUsers () {
    yield takeEvery(GET_USERS_REQUEST, workerGetAllUsers)
}

function* watchPostUser () {
    yield takeEvery(POST_USERS_REQUEST, workerPostUser)
}

export const usersWatchers: ForkEffect[] = [
    fork(WatchGetAllUsers),
    fork(watchPostUser)
];
