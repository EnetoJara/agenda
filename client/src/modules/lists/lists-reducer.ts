import { ListsState, AppAction } from "@eneto/api-client";
import { Reducer } from "redux";
import { GET_LISTS_SUCCESS, CLEAN_CURRENT_LIST } from "../../utils/constants";

export const initListsState: ListsState = {
    lists: [],
};

function clean (): ListsState {
    return initListsState;
}

function setLists (state: ListsState, action: AppAction): ListsState {
    const { payload } = action;

    return {
        ...state,
        lists: [ ...payload ],
    };
}

export const listsReducer: Reducer<ListsState, AppAction> = (
    state: ListsState = initListsState,
    action: AppAction,
): ListsState => {
    switch (action.type) {
        case GET_LISTS_SUCCESS:
            return setLists(state, action);
        case CLEAN_CURRENT_LIST:
            return clean();
        default:
            return {
                ...state,
            };
    }
};
