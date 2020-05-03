import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducers";
import { AppState } from "@eneto/api-client";
import { initUserState } from "../../modules/users/user-reducer";
import { initUsersState } from "../../modules/users/users-reducer";
import { initListsState } from "../../modules/lists/lists-reducer";
import { initListState } from "../../modules/lists/list-reducer";

const init: AppState = {
    currentUser: initUserState,
    users: initUsersState,
    lists: initListsState,
    currentList: initListState
};

export function store(initialState: AppState = init) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    return {
        ...createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))),
        runSaga: sagaMiddleware.run
    };
}
