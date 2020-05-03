import { AppAction, ListState } from "@eneto/api-client";
import { Reducer } from "redux";
import { GET_LIST_SUCCESS, CLEAN_CURRENT_LIST } from "../../utils/constants";

export const initListState: ListState = {
    id: 0,
    name: "",
    description: "",
    createdAt: new Date(),
    updatedAt: new Date(),
};

function clean (): ListState {
    return { ...initListState };
}

function setList (state: ListState, action: AppAction): ListState {
    const { payload } = action;

    return {
        ...state,
        ...payload,
    };
}

export const listReducer: Reducer<ListState, AppAction> = (
    state: ListState = initListState,
    action: AppAction,
): ListState => {
    switch (action.type) {
        case GET_LIST_SUCCESS:
            return setList(state, action);
        case CLEAN_CURRENT_LIST:
            return clean();
        default:
            return {
                ...state,
            };
    }
};
