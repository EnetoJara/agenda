import { AppAction, UsersState } from "@eneto/api-client";
import { Reducer } from "redux";

export const initUsersState: UsersState = {
    users: [],
};

export const usersReducer: Reducer<UsersState, AppAction> = (
    state: UsersState = initUsersState,
    action: AppAction,
): UsersState => {
    switch (action.type) {
        default:
            return { ...state };
    }
};
