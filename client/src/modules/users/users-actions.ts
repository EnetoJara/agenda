import { AppAction } from "@eneto/api-client";

export function usersAction<T, P> (type: T, payload: P): AppAction<T, P> {
    return {
        type,
        payload,
    };
}

export type UsersAction = typeof usersAction;
