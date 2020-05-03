import { all } from "redux-saga/effects";
import {
 userActions, userApi, userReducer, usersWatchers
} from "./users";

import {
 listActions, listApi, listReducer, listsWatchers,
} from "./lists";

function* rootSagas () {
    const watchers = [...listsWatchers, ...usersWatchers];

    yield all(watchers);
}

export {
    userActions,
    userApi,
    userReducer,
    rootSagas,
    listActions,
    listApi,
    listReducer,
    listsWatchers,
};
