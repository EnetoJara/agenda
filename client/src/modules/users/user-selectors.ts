import {createSelector} from "reselect";
import { AppState } from '@eneto/api-client';

const getUsersByList = (state: AppState) => state.users.users;

export const usersByList = createSelector(getUsersByList, users=>users);
