declare namespace NodeJS {
    interface ProcessEnv {
        readonly API_BASE: string;
        readonly NODE_ENV: string;
        readonly PORT: string;
        readonly PUBLIC_URL: string;
        readonly GENERATE_SOURCEMAP: string;
        readonly ROUTE_HOME: string;
        readonly ROUTE_LOGIN: string;
        readonly ROUTE_REGISTER: string;
        readonly ROUTE_LISTS: string;
        readonly ROUTE_LISTS_ID_USERS: string;
        readonly ROUTE_LISTS_ID_USERS_ID: string;
        readonly API_USERS_GET_ALL: string;
        readonly API_USERS_INSERT: string;
        readonly API_USERS_UPDATE_BY_ID: string;
        readonly API_USERS_DELETE_BY_ID: string;
        readonly API_LISTS_GET_BY_ID: string;
        readonly API_LISTS_GET_ALL: string;
        readonly API_LISTS_INSERT: string;
        readonly API_LISTS_UPDATE_BY_ID: string;
        readonly API_LISTS_DELETE_BY_ID: string;
        readonly API_ROUTE_TEST: string;

    }
}
