import { createSelector } from "reselect";
import { AppState, ListState, ListsState } from "@eneto/api-client";
import { Selector } from "react-redux";

const getLists = (state: AppState) => state.lists.lists;
const getList: Selector<AppState, ListState> = (state: AppState): ListState => state.currentList;
export const lists = createSelector(
    getLists,
    lists => lists,
);
export const list = createSelector<AppState, ListState, ListState>(getList, (lists: ListState): ListState => lists);
