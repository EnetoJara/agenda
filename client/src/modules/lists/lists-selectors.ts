import { AppState, ListState } from "@eneto/api-client";
import { Selector } from "react-redux";
import { createSelector, OutputSelector } from "reselect";

const getLists: Selector<AppState, ListState[]> = (state: AppState): ListState[] => state.lists.lists;
const getList: Selector<AppState, ListState> = (state: AppState): ListState => state.currentList;
export const lists: OutputSelector<AppState, ListState[], (res: ListState[]) => ListState[]> = createSelector<AppState, ListState[], ListState[]>(
    getLists,
    lists => lists,
);
export const list: OutputSelector<AppState, ListState, (res: ListState) => ListState> = createSelector<AppState, ListState, ListState>(getList, (lists: ListState): ListState => lists);
