import { combineReducers } from "redux";
import { userReducer, listReducer } from "../../modules";
import { listsReducer } from "../../modules/lists/lists-reducer";
import { usersReducer } from "../../modules/users";

export const rootReducer = combineReducers({
    users: usersReducer,
    currentUser: userReducer,
    lists: listsReducer,
    currentList: listReducer,
});
