import { AppAction, UserState } from "@eneto/api-client";
import { Reducer } from "redux";

export const initUserState: UserState = {
    id: 0,
    name: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
    email: "",
    address: "",
    createdAt: new Date(),
    updatedAt: new Date(),
};

function clean (state: UserState, initUserState: UserState): UserState {
    return {
        ...state,
        ...initUserState,
    };
}

export const userReducer: Reducer<UserState, AppAction> = (
    state: UserState = initUserState,
    action: AppAction,
): UserState => {
    switch (action.type) {
        default:
            return clean(state, initUserState);
    }
};
