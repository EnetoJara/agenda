import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducers";

export function configureStore<AppState> (initialState: AppState) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const { run } = sagaMiddleware;

    return {
        ...createStore(rootReducer, initialState, applyMiddleware(...middleware)),
        runSaga: run,
    };
}
