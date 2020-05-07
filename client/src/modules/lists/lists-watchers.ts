import { fork, ForkEffect, takeEvery, takeLatest } from "redux-saga/effects";

import { DELETE_LISTS_REQUEST, GET_LIST_REQUEST, GET_LISTS_REQUEST, POST_LISTS_REQUEST } from "../../utils/constants";
import { deleteListsWorker, getAllListsWorker, getListWorker, postLists } from "./lists-workers";

/**
 *  Spawns a `saga` on each action dispatched to the Store that matches `pattern`.
 */
function* getAllListsWatcher () {
    yield takeEvery(GET_LISTS_REQUEST, getAllListsWorker);
}
function* getListWatcher () {
    yield takeEvery(GET_LIST_REQUEST, getListWorker);
}
function* postListsWatcher () {
    yield takeLatest(POST_LISTS_REQUEST, postLists);
}
function* deleteListsWatcher () {
    yield takeEvery(DELETE_LISTS_REQUEST, deleteListsWorker);
}

export const listsWatchers: ForkEffect[] = [
    fork(getAllListsWatcher),
    fork(getListWatcher),
    fork(postListsWatcher),
    fork(deleteListsWatcher),
];
