import * as React from "react";
import * as Loadable from "react-loadable";

const Loading = (): React.ReactElement => <span>Loadong</span>;

export const List = Loadable({
    loader: () => import(/* webpackChunkName: "lists" */ "./list-constainer"),
    loading: Loading,
});

export const User = Loadable({
    loader: () => import(/* webpackChunkName: "register" */ "./users-container"),
    loading: Loading,
});
export const Lists = Loadable({
    loader: () => import(/* webpackChunkName: "LandingPage" */ "./lists-constainer"),
    loading: Loading,
});
